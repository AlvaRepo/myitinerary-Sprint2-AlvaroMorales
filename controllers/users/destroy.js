import User from "../../models/User.js";

export default async (req, res, next) => {

    try {
        let deletedUser = await User.findByIdAndDelete(req.params.id)
        return res
            .status(200)
            .json({
                succes: true,
                message: 'user deleted',
                response: deletedUser._id
            })
        } catch (error) {
        return res.status(400).json({
            succes: false,
            message: 'not deleted',
            response: null
            })
        }
}