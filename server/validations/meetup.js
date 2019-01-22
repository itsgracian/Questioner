import validator from "validator";
import isEmpty from "./isEmpty";

module.exports = (data) => {
  const errors = {};
  data.topic = !isEmpty(data.topic) ? data.topic : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.happeningOn = !isEmpty(data.happeningOn) ? data.happeningOn : "";

  //@validator
  if (validator.isEmpty(data.topic)) {
    errors.topic = "topic is required";
  }
  //@topic isLength
  if (!validator.isLength(data.topic, { min: 6 })) {
    errors.topic = "topic must be 6 characters or long";
  }
  //happeningOn
  if (validator.isEmpty(data.happeningOn)) {
    errors.happeningOn = "meetup date is required.";
  }
  //@location
  if (validator.isEmpty(data.location)) {
    errors.location = "location is required.";
  }
  //@validate date
  if (!validator.toDate(data.happeningOn)) {
    errors.happeningOn = "Date must be a valid date Year-Month-Day hours:min";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
