import {model, Schema, Types} from "mongoose";

let collection = "cities";

let schema = new Schema({
    country: {type:String, required:true} ,
    foundation: {type:Date,required:true},
    population: {type:Number},
    photo: {type:String, required:true},
    city: {type:String, required:true},
    description: {type:String, default:"Edit later"},
    smalldescription: {type:String, default:"Edit later"},
    featuredLocation: {type:String, default:"Edit later"},
    admin_id: {type:Types.ObjectId, required:true, ref:'users'}
},{
    timestamps: true
})

let City = model(collection, schema)
export default City