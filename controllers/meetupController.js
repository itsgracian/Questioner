const uuid = require("uuid");
const meetupValidation = require("../validations/meetup");

//@model
const Meetup = require("../models/meetUpModel");
const Response = require("../models/responseModel");

exports.create = (req, res) => {
  const { errors, isValid } = meetupValidation(req.body);
  //@check validations
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newMeetup = {
    id: uuid.v4(),
    topic: req.body.topic.toLowerCase(),
    location: req.body.location.toLowerCase(),
    happeningOn: new Date(req.body.happeningOn).toGMTString(),
    tags: (req.body.tags) ? req.body.tags.split(",") : "",
    createdOn: new Date().toGMTString()
  };
  //prevent duplicate name for meetUp topic
  if (Meetup.findOne(newMeetup.topic)) {
    return res.status(400).json({ error: "meetup topic is already exist." });
  }
  const save = Meetup.create(newMeetup);
  if (save) {
    return res.json({
      success: "meetup created successfully",
      save
    });
  }
  return res.status(500).json({ error: "sorry something wrong try again." });
};

//@allMeetup
exports.allMeetup = (req, res) => res.json(Meetup.findAll());
//@findOne meetUp
exports.findOneMeetup = (req, res) => {
  const id = req.params.id;
  if (Meetup.findById(id)) {
    return res.json(Meetup.findById(id));
  }
  return res.status(404).json({ error: "sorry the requested result could not be found." });
};
//upcoming meetUp
exports.upcomingMeetup = (req, res) => {
  res.json({ upcoming: Meetup.upcoming() });
};
//@deletemeetup
exports.deleteMeetup = (req, res) => {
  const id = req.params.id;
  if (!Meetup.findById(id)) {
    return res.status(404).json({ error: "sorry the requested result could not be found." });
  }
  const remove = Meetup.deletemeetup(id);
  if (remove) {
    return res.json({ success: "well done meetUp removed successfully." });
  }
  return res.status(500).json({ error: "something wrong try again." });
};
//@update meetUp
exports.updateMeetup = (req, res) => {
  const id = req.params.id;
  const { errors, isValid } = meetupValidation(req.body);
  //@check if meetUp is available
  if (Meetup.findById(id)) {
    const meetupData = {
      id,
      topic: req.body.topic.toLowerCase(),
      location: req.body.location.toLowerCase(),
      happeningOn: new Date(req.body.happeningOn).toGMTString(),
      tags: (req.body.tags) ? req.body.tags.split(",") : "",
      createdOn: new Date().toGMTString()
    };
    //@when is available
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //@prevent meetUp topic duplication
    //@before we update meetUp
    const allMeetup = Meetup.findAll().data;
    const result = allMeetup.filter(meetup => meetup.id !== id);
    if (result.length !== 0) {
      //@loop
      result.forEach((meetup) => {
        if (meetup.topic === meetupData.topic) {
          return res.status(400).json({ error: "topic already exist." });
        }
        //@update
        const modify = Meetup.updatemeetup(id, meetupData);
        return res.json({ success: "updated successfully.", data: modify });
      });
    } else {
      //@update
      const modify = Meetup.updatemeetup(id, meetupData);
      res.json({ success: "updated successfully.", data: modify });
    }
    return true;
  }
  return res.status(404).json({ error: "sorry the requested result could not be found." });
};

//@response
exports.response = (req, res) => {
  const id = req.params.id;
  if (Meetup.findById(id)) {
    const data = {
      id: uuid.v4(),
      data: [
        {
          meetup: req.body.meetup,
          topic: req.body.topic,
          status: req.body.status
        }
      ]
    };
    const save = Response.create(data);
    if (save) {
      return res.json({ success: "response created successfully.", save });
    }
    return res.status(400).json({ error: "something wrong please try again" });
  }
  return res.status(400).json({ error: "sorry meetup could not be found." });
};
