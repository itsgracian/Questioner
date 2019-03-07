import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import keys from "./keys";
import pool from "./connection";

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

const AuthenticationAPI = (passport) => {
  passport.use(new JwtStrategy(opts, (JwtPayload, done) => {
    //@find User
    pool.query("SELECT * FROM public.users WHERE id=$1", [JwtPayload.id],
      (error, user) => {
        if (error) {
          return done(error, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
  }));
};

export default AuthenticationAPI;
