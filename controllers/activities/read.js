import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        let searchObject = {}
        if (req.query.itinerary_id) { //si existe esa consulta
            searchObject.itinerary_id = req.query.itinerary_id // le agrego la propiedad con el valor de "req"
        }
        let all = await Activity
            .find(searchObject)
        if (all.length>0) {
            return res
            .status(200)
            .json({
                success: true,
                message: 'Activities found!',
                response: all
            })
        } else {
            return res
            .status(404)
            .json({
                success: false,
                message: "No Activities for this Itinerary",
                response: null
            })
        }
    }
    catch (error) {
        next(error)
    }
}

