import { hashSync } from "bcrypt";

export default (req,res,next) =>{

    try {
        let hashPassword = hashSync(req.body.password, 5)
        req.body.password = hashPassword
        return next()
    } catch (error) {
        return next(error)
    }

}