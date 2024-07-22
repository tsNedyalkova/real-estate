import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fuser-profile-female%2F192701&psig=AOvVaw1_qCcwQAWHx40PvcY-_Yqt&ust=1721670945841000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDd8KbauIcDFQAAAAAdAAAAABAJ",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;