import  jwt  from "jsonwebtoken";

export default (req,res,next) => {
    try {
        let token = jwt.sign (
            { mail : req.user.mail },           //objeto a convertir en token
            process.env.SECRET_KEY,                         //palabra que sirve de llave para tokenizar
            {expiresIn: 60*60*24*7}             //expiración en seg
        )
        req.token = token
        console.log(req.token)
        return next()
    } catch (error) {
        next(error)
    }
}