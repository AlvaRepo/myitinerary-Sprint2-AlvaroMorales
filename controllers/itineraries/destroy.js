import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let deletedItinerary = await Itinerary.findByIdAndDelete(req.params._id);
        if (deletedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted',
                response: deletedItinerary._id
            })
        }   else {
            return res.status(404).json({
                    success:false,
                    message: 'itinerary not found',
                    response:null
                }
            )
        };
    } catch (error) {
        next(error)
    }
};
