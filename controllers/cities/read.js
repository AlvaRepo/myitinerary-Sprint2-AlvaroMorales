import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let sortObject = {}
        let searchObject = {}
        if (req.query.admin_id) {
            searchObject.admin_id = req.query.admin_id
        }
        if (req.query.city){ 
            searchObject.city = new RegExp('^' + req.query.city, 'i') // 
        }
        
        if (req.query.sort) {
            sortObject.city = req.query.sort 
        }

        let allCities = await City
            .find(searchObject, 'country city photo smalldescription admin_id')
            .populate('admin_id', 'photo name mail -_id')
            .sort(sortObject)
            .find()
            .populate('admin_id')
            .select()
        if (allCities.length>0) {
            return res
            .status(200)
            .json({
                success: true,
                message: 'cities found',
                response: allCities
            })
        } else {
            return res
            .status(404)
            .json({
                success: false,
                message: "not found",
                response: null
            })
        }
    }
    catch (error) {
        next(error)
    }
}

