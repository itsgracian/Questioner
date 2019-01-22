import validator from "validator";
import isEmpty from "./isEmpty";

//validations
module.exports = (data) => {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //@validations
  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required.";
  }
  //@password
  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
