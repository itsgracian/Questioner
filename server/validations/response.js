import validator from "validator";
import isEmpty from "./isEmpty";

module.exports = (data) => {
  const errors = {};
  data.respond = !isEmpty(data.respond) ? data.respond : "";
  //@validator
  if (validator.isEmpty(data.respond)) {
    errors.respond = "rsvp field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
