const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        desc: { type: String, required: true },
        post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
        check: { type: Boolean, default: true },
    },
    { timestamps: true }
);


module.exports = mongoose.model('Comment', CommentSchema);
