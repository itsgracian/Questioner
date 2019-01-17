const uuid = require("uuid");

class MeetUpModel {
  constructor() {
    this.meetups = {
      data: []
    };
  }

  create(element) {
    this.meetups.data.push(element);
    return element;
  }

  findAll() {
    return this.meetups;
  }

  findOne(topic) {
    return this.meetups.data.find(meetup => meetup.topic === topic);
  }

  findById(id) {
    return this.meetups.data.find(meetup => meetup.id === id);
  }

  deletemeetup(id) {
    const search = this.meetups.data.indexOf(id);
    this.meetups.data.splice(search, 1);
    return true;
  }

  updatemeetup(id, element) {
    const equal = this.findById(id);
    const meetup = this.meetups.data.indexOf(equal);
    return (this.meetups.data[meetup] = element);
  }

  upcoming() {
    //return upcoming meetUp using sort by date
    const data = this.meetups.data;
    return data.sort((a, b) => new Date(a.happeningOn) - new Date(b.happeningOn));
  }
}

module.exports = new MeetUpModel();
