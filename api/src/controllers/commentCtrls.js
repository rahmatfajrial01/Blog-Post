const Comment = require("../models/commentModels");
const Post = require("../models/PostModels");

const createComment = async (req, res, next) => {
    try {
        const { slug, desc } = req.body;

        const post = await Post.findOne({ slug });

        if (!post) {
            const error = new Error("Post not fount");
            return next(error);
        }

        const newComment = new Comment({
            user: req.user._id,
            desc,
            post: post._id,
        });

        const savedComment = await newComment.save();

        return res.status(201).json(savedComment);
    } catch (error) {
        next(error);
    }
};

const getAllComments = async (req, res) => {
    try {
        const AllComments = await Comment.find().populate('user').populate({
            path: 'post', populate: { path: 'user' }
        });
        res.json(AllComments)
    } catch (error) {
        throw new Error(error)
    }
}

const updateStatusComment = async (req, res, next) => {
    try {
        const { check } = req.body;
        const commentStatus = await Comment.findByIdAndUpdate(
            req.params.id,
            {
                check,
            },
            {
                new: true,
            }
        );

        if (!commentStatus) {
            const error = new Error("Check comment was not found");
            return next(error);
        }

        return res.json(commentStatus);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createComment, getAllComments, updateStatusComment
}