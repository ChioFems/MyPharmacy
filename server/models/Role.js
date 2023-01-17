import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        iid: Number,
        name: {
            type: String,
            required: true,
            max: 100
        },
        description: {
            type: String,
            max: 100
        }
    }
);

const Role = mongoose.model("Role", RoleSchema);
export default Role;