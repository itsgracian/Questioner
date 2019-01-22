import keys from "./keys";
import pool from "./connection";
import {Strategy as JwtStrategy }  from "passport-jwt";
import {ExtractJwt} from "passport-jwt";

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    //@find User
    pool.query("SELECT * FROM public.users WHERE id=$1", [jwt_payload.id],
     (error,user)=>{
       if (error) {
         return done(error,false);
       }
       if (user) {
         return done(null, user);
       } else {
            return done(null, false);
        }
     });
  }));
};
