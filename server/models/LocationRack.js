import mongoose from "mongoose";

const LocationRackSchema = new mongoose.Schema(
    {
        iid: Number,
        name: {
            type: String,
            required: true,
            max: 100
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        },
        createdBy:String,
        updatedBy: String,
    },
    { timestamps: true }
);

const LocationRack = mongoose.model("LocationRack", LocationRackSchema);
export default LocationRack;