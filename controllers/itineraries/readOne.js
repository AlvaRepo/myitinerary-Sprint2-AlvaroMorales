import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let oneItinerary = await Itinerary
            .findOne({ _id: req.params._id }, '-createdAt -updatedAt')
            .select("-_id")
            // .populate('city_id', 'country city photo smalldescription admin_id');
            .populate({
                path: 'city_id',
                select: 'country city photo smalldescription admin_id',
                populate: {
                    path: 'admin_id',
                    select: 'photo name -_id'
                }
            })
        
        if (oneItinerary) {
            return res.status(200).json({
                success: true,
                message: 'Itinerary found',
                response: oneItinerary
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Itinerary not found',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};
