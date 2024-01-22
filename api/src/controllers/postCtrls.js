const asyncHandler = require('express-async-handler');
const { uploadPicture } = require('../middlewares/uploadPicture');
const Post = require("../models/PostModels");
// const { fileRemover } = require('../utils/fileRemover');
const { v4 } = require("uuid");
const { fileRemover } = require('../utils/fileRemover');

const createPost = asyncHandler(async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            caption: req.body.caption,
            categories: JSON.parse(req.body.categories),
            slug: v4(),
            body: {
                type: "doc",
                content: []
            },
            photo: req.file.filename,
            user: req.user._id
        })
        const createdPost = await post.save()
        return res.json(createdPost)
    } catch (error) {
        console.log(error)
    }
});

const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findOneAndDelete({ slug: req.params.slug });

        if (post.photo) {
            fileRemover(post.photo);
        }
        if (!post) {
            const error = new Error("Post aws not found");
            return next(error);
        }

        return res.json({
            message: "Post is successfully deleted",
        });
    } catch (error) {
        next(error);
    }
};

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate("user").populate("categories");
        return res.json(posts);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPost,
    getAllPosts,
    deletePost
}