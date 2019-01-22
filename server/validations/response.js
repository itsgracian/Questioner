import validator from "validator";
import isEmpty from "./isEmpty";

module.exports = (data) => {
  const errors = {};
  data.status = !isEmpty(data.status) ? data.status : "";
  data.topic = !isEmpty(data.topic) ? data.topic : "";
  //@validator
  if (validator.isEmpty(data.status)) {
    errors.status = "status field is required";
  }
  //
  if (validator.isEmpty(data.topic)) {
    errors.topic = "topic field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
