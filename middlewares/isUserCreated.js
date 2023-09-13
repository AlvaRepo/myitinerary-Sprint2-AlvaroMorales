import User from "../models/User.js";

export default async (req,res,next) => {
    try {

        let one = await User.findOne({mail:req.body.mail})
        console.log(one)
        if (one) {
            return res.status(400).json({
                success: false,
                message: 'user is already registered',
                response: one._id
            })
            
        }
        next()
    } catch (error) {
        return next(error)
    }
}

