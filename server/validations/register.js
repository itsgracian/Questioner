const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = (data) => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //@validations
  if (validator.isEmpty(data.email)) {
    errors.email = "email is required";
  }
  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "firstname is required";
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "lastname is required";
  }
  if (validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "phoneNumber is required";
  }
  if (validator.isEmpty(data.username)) {
    errors.username = "username is required";
  }
  if (!validator.isLength(data.username, { min: 4 })) {
    errors.username = "username must be 4 characters or long";
  }
  //@password
  if (validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }
  if (!validator.isLength(data.password, { min: 6 })) {
    errors.password = "password must be 6 character or long";
  }
  //@check if email is valid
  if (!validator.isEmail(data.email)) {
    errors.email = "email must be valid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
