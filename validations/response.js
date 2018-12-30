const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = (data) => {
  const errors = {};
  data.meetup = !isEmpty(data.meetup) ? data.meetup : "";
  data.status=!isEmpty(data.status) ? data.status :"";
  data.topic=!isEmpty(data.topic) ? data.topic :"";
  //@validator
  if (validator.isEmpty(data.meetup)) {
    errors.meetup='meetup field is required';
  }
  //
  if (validator.isEmpty(data.status)) {
    errors.status="status field is required";
  }
  //
  if (validator.isEmpty(data.topic)) {
    errors.topic="topic field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
