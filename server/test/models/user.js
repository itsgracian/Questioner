const Coveralls=require("coveralls")
Coveralls.wear;
const assert = require("chai").assert;
//models
const user = require("../../models/userModel");

describe("User", () => {
  //@create new user testing
  describe("create", () => {
    it("create() should return object", () => {
      const result = user.create();
      assert.typeOf(result, "object");
    });
  });
  //@findAll test
  describe("findAll", () => {
    it("findAll() should return array of data", () => {
      const result = user.findAll();
      assert.typeOf(result, "array");
    });
  });
});
