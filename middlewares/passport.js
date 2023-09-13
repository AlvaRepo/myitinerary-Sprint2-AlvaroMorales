import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt"
export default passport.use(

    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        },
        async (jwt_payload, done) => {
            try {
                let user = await User.findOne ({ mail: jwt_payload.mail }, '-_id -__v -password')
                if (user) {
                    return done(null,user);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                return done(error)
                
            }
        }
    )
)