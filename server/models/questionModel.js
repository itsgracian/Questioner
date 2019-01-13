const uuid = require("uuid");

class QuestionModel {
  constructor() {
    this.questions = {
      status: uuid.v4(),
      data: []
    };
  }

  create(element) {
    this.questions.data.push(element);
    return element;
  }

  findAll() {
    return this.questions;
  }

  findOne(topic) {
    return this.questions.data.find(question => question.topic === topic);
  }

  findById(id) {
    return this.questions.data.find(question => question.id === id);
  }

  deletequestion(id) {
    const search = this.questions.data.indexOf(id);
    this.questions.data.splice(search, 1);
    return true;
  }

  updatequestion(id, element) {
    const equal = this.findById(id);
    const question = this.questions.data.indexOf(equal);
    return (this.questions.data[question] = element);
  }
}

module.exports = new QuestionModel();
