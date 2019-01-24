import validator from "validator";
import isEmpty from "./isEmpty";

module.exports = (data) => {
  const errors = {};

  data.body = !isEmpty(data.body) ? data.body : "";
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
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
