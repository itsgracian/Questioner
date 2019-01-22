import passport from "passport";
module.exports = {
  isLogin: (req, res, next) => {
    if (passport.authenticate("jwt",{session:false})) {
      next();
    }
    return res.status(400).json({
      auth: "unauthorized user"
    });
  },
  notLogin: (req, res, next) => {
    if (!passport.authenticate("jwt",{session:false})) {
      next();
    }
    return res.status(400).json({ authError: "sorry you already logged in." });
  }
};
