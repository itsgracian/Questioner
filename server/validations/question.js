const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = (data) => {
  const errors = {};

  data.body = !isEmpty(data.body) ? data.body : "";
  data.meetup = !isEmpty(data.meetup) ? data.meetup : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.user = !isEmpty(data.user) ? data.user : "";


  //@validations
  if (validator.isEmpty(data.body)) {
    errors.body = "Question body is required.";
  }
  //@title
  if (validator.isEmpty(data.title)) {
    errors.title = "Question title is required.";
  }
  //@meetup
  if (validator.isEmpty(data.meetup)) {
    errors.meetup = "meetup is required.";
  }
  //@createdBy
  if (validator.isEmpty(data.user)) {
    errors.user = "createdBy (user) field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
