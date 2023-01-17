import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
    {
        iid: Number,
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        companyAddress: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        email: {
            type: String,
            required: true,
            max: 60,
            unique: true
        },
        contactNumber: {
            type: String,
            max: 15,
            unique: true
        },
        contactPersonName: {
            type: String,
            min: 2,
            max: 100
        },
        contactPersonRole: {
            type: String,
            min: 2,
            max: 50
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

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;