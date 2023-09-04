import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next)=>{
    try {
        let queries = {}
        if (req.query.city_id) {
            queries.city_id = req.query.city_id            
        }
        let allItineraries= await Itinerary
            .find(queries, '-createdAt -updatedAt')
            .populate({
                path:"city_id",
                select: 'city country photo admin_id',
                populate: {
                    path: 'admin_id',
                    select: 'photo name'}
            })
        return res
            .status(200)
            .json({
                success: true,
                message: 'Itinerarie found',
                response: allItineraries
        })
    } catch (error) {
        next(error);
    }

}