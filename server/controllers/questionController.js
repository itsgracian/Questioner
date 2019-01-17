const uuid = require("uuid");
//question validations
const questionValidation = require("../validations/question");
//models
const Question = require("../models/questionModel");
const Meetup = require("../models/meetUpModel");
const User = require("../models/userModel");
//@create question on specific meetUp
exports.create = (req, res) => {
  const meetupId=req.params.meetupId;
  const { errors, isValid } = questionValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //@do something
  //@check if meetup id is valid
  if (Meetup.findById(meetupId)) {
    //@check if user is available
    if (User.findById(req.body.user)) {
      const newQ = {
        id: uuid.v4(),
        title: req.body.title,
        body: req.body.body,
        meetup: meetupId,
        user: req.body.user,
        createdOn: new Date().toGMTString(),
        votes: (req.body.votes) ? req.body.votes : 0
      };
      const saveQ = Question.create(newQ);
      if (saveQ) {
        return res.status(200).json({ status:200,success: "question created successfully.", question: saveQ });
      }
      return res.status(500).json({ error: "something wrong try again later." });
    }
    return res.status(404).json({ error: "createdBy (user) not found" });
  }
  return res.status(404).json({ error: "meetup not found" });
};
//@votes
exports.vote = (req, res) => {
  const id = req.params.id;
  //findById
  if (Question.findById(id)) {
    let vote = Question.findById(id).votes;
    //increment +1
    vote += 1;
    Question.findById(id).votes = vote;
    //@update
    const update = Question.updatequestion(id, Question.findById(id));
    return res.status(201).json({ status:201,success: "thanks, your vote was recorded successfully.", update });
  }
  //@when not question is not available
  return res.status(404).json({ error: "sorry the requested result couldn't be found." });
};

//@downvote question
exports.downvote = (req, res) => {
  const id = req.params.id;
  //@check
  if (Question.findById(id)) {
    let vote = Question.findById(id).votes;
    //@check if vote equal to 0
    //@because we don't need to go under 0 vote (-)
    if (vote === 0) {
      vote = 0;
      Question.findById(id).votes = vote;
      //@update
      const update = Question.updatequestion(id, Question.findById(id));
      return res.status(201).json({ status:201,
        success: "thanks, your vote was removed successfully.", update });
    }
    //@other wise vote will be decreased
    //decrement -1
    vote -= 1;
    Question.findById(id).votes = vote;
    //@update
    const update = Question.updatequestion(id, Question.findById(id));
    return res.json({ status:201,
      success: "thanks, your vote was removed successfully.",
      update });
  }
  //@when not question is not available
  return res.status(404).json({ error: "sorry the requested result couldn't be found." });
};

//@delete question
exports.deleteQuestion = (req, res) => {
  const id = req.params.id;
  //@check if question is available
  if (Question.findById(id)) {
    const userID = Question.findById(id).user;
    //@check if user is allowed to delete question
    if (User.findById(userID)) {
      //@remove question
      const remove = Question.deletequestion(id);
      if (remove) {
        return res.status(201).json({ status:201,
        success: "question removed successfully." });
      }
      return res.status(500).json({ error: "something wrong try again." });
    }
    //@when not question is not available
    return res.status(404).json({ error: "sorry you are not allowed to remove question." });
  }
  //@when not question is not available
  return res.status(404).json({ error: "sorry the requested result couldn't be found." });
};

//@
exports.askedQ = (req, res) => {
  const id = req.params.userId;
  const find = User.findById(id);
  const q = Question.findAskQ();
  if (!find) {
    return res.status(404).json({ error: "sorry the requested resource could not be found." });
  }
  //@check also if user has created question
  if (q.length === 0) {
    return res.status(404).json({ error: "whoops!! not found." });
  }
  const some = q.filter(quest => quest.user === id);
  if (some.length === 0) {
    return res.status(400).json({
      error: `sorry ${find.username},you didn't create question.`
    });
  }
  const message = `Hey ${find.username} this is your questions.`;
  return res.status(201).json({ status: 201, message, YourQuestion: some });
};
