import validator from "validator";
import isEmpty from "./isEmpty";
module.exports = {
  postComment: (data) => {
    const errors = {};
    data.comment = !isEmpty(data.comment) ? data.comment : "";
    //@validator
    if (validator.isEmpty(data.comment)) {
      errors.comment = "comment  is required";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  },
  patchComment: (data) => {
    const errors = {};
    data.comment = !isEmpty(data.comment) ? data.comment : "";
    //@validator
    if (validator.isEmpty(data.comment)) {
      errors.comment = "comment  is required";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

};
