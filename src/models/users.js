import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        username: String,
        password: String,
        dob: String
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;