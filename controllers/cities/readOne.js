import City from "../../models/City.js";
export default async (req, res, next) => {

    try {
        let oneCity = await City.findOne({ _id: req.params.city_id }).select("country city smalldescription -_id")
        
        if (oneCity) {
            return res
            .status(200)
            .json({
                success: true,
                message: 'city found',
                response: oneCity
            })
        }
        else {
            return res
            .status(404)
            .json({
                success: false,
                message: 'city not found',
                response: null
            })
        }

    } catch (error) {
        next(error)
    }

}
