import validator from "validator";
import isEmpty from "./isEmpty";

module.exports = (data) => {
  const errors = {};

  data.tags = !isEmpty(data.tags) ? data.tags : "";

  //@validations
  if (validator.isEmpty(data.tags)) {
    errors.tags = "tags is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
