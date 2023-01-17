import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        iid: Number,
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        fullName: String,
        email: {
            type: String,
            required: true,
            max: 60,
            unique: true
        },
        phoneNumber: {
            type: String,
            max: 10,
            unique: true
        },
        roleId: {
            //type: [mongoose.Types.ObjectId],
            //of: String,
            type: String,
            required: true,
        },
        //profilePicture: Image,
        password: {
            type: String,
            required: true,
            min: 5
        },
        confirmPassword: {
            type: String,
            required: true,
            min: 5
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

const User = mongoose.model("User", UserSchema);
export default User;