import validator from "validator";
import isEmpty from "./isEmpty";

module.exports = (data) => {
  const errors = {};
  data.newpassword = !isEmpty(data.newpassword) ? data.newpassword : "";
  data.recentpassword = !isEmpty(data.recentpassword) ? data.recentpassword : "";
  //@validations
  if (validator.isEmpty(data.recentpassword)) {
    errors.recentpassword = "recent password is required";
  }
  //@password
  if (validator.isEmpty(data.newpassword)) {
    errors.newpassword = "new password is required";
  }
  if (!validator.isLength(data.newpassword, { min: 6 })) {
    errors.newpassword = "new password must be 6 character or long";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
