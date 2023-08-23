import { json } from "express";
import City from "../../models/City.js"
export default async (req,res,next)=>{
    try {
        let count = await City.countDocuments();
        let countLimit;
        if (count%4 > 0 ) {
            countLimit = count - Math.floor( count / 4 )  // it limits the ammount of cities 
        }
        let all = await City.find({}, 'photo city country')
            .sort({ country: 1})
            .limit(countLimit)
        return res
            .status(200)
            .json({
                success: true,
                message: 'cities to show on carousel',
                data_carousel: all,
                count,
                countLimit
            })
    } catch (error) {
        next(error)
    }
}