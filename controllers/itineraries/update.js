import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params._id, 
            req.body,
            { new: true }
        ).select('country city photo admin_id'); 
        if (updatedItinerary){
            return res.status(200).json({
                success: true,
                message: "Itinerary updated", 
                response: updatedItinerary,
            })
        }
        else {
            return res.status(404).json({
                    success:false,
                    message: 'itinerary not found',
                    response:null
                }
            )
        };
    } catch (error) {
        next(error);
    }
};
