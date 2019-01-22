import validator from "validator";
import isEmpty from "./isEmpty";
module.exports = {
  postComment: (data) => {
    const errors = {};
    data.comment = !isEmpty(data.comment) ? data.comment : "";
    data.question = !isEmpty(data.question) ? data.question : "";

    //@validator
    if (validator.isEmpty(data.comment)) {
      errors.comment = "comment  is required";
    }

    //@location
    if (validator.isEmpty(data.question)) {
      errors.question = "question is required.";
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
