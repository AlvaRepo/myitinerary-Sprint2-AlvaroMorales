import express from "express";
import register from "../controllers/auth/register.js";
import isUserCreated from "../middlewares/isUserCreated.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import isValidPass from "../middlewares/isValidPass.js";
import signin from "../controllers/auth/signin.js";
import signinSchema from "../schemas/signin.js";
import isUserAround from "../middlewares/isUserAround.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidtoken from "../middlewares/isValidToken.js";
import token from "../controllers/auth/token.js";
import passport from "../middlewares/passport.js";
import signout from "../controllers/auth/signout.js";
let authRouter = express.Router();

// authRouter.post('/signup'), register);
//validad joi, validad no existe cuenta y hashear
authRouter.post(
    "/register",
    validator(registerSchema),
    isUserCreated,
    isValidPass,
    register
);

authRouter.post(
    "/signin",
    validator(signinSchema),
    isUserAround,
    isPassOk,
    isValidtoken,
    signin
);
authRouter.post(
    "/token",
    passport.authenticate("jwt", { session: false }),
    isValidtoken,
    token
);
authRouter.post(
    "/signout",
    passport.authenticate("jwt", { session: false }),
    signout
);
export default authRouter;
