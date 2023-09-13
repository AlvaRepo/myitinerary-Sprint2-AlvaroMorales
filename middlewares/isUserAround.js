import User from "../models/User.js";

export default async (req,res,next) => {
    try {
        let one = await User.findOne({mail:req.body.mail}, '-_id -__v -password')
        if (!one) {
            return res.status(400).json({
                success: false,
                message: 'user was not register',
                response: req.user
            })
        } else {
            req.user = one
            console.log(req.user)
            return next();
        }
    } catch (error) {
        return next(error)
    }
}

