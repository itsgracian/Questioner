const expect = require("chai").expect;

//@controller
const meetup = require("../../controllers/meetupController");

//testing begin
describe("meetup", () => {
  //@
  describe("create()", () => {
    it("should be a function", () => {
      const result = meetup.create;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("allMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.allMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("findOneMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.findOneMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("upcomingMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.upcomingMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("deleteMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.deleteMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("updateMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.updateMeetup;
      expect(result).to.be.a("function");
    });
  });
});
