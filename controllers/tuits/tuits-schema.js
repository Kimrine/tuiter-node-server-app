import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    postedBy: String,
    handle: String,
    avatarImage: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    comments: Number,
    retuits: Number
},{collection: 'tuits'});

export default schema;