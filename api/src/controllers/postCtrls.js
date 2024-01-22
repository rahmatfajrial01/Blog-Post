const asyncHandler = require('express-async-handler');
const { uploadPicture } = require('../middlewares/uploadPicture');
const Post = require("../models/PostModels");
// const { fileRemover } = require('../utils/fileRemover');
const { v4 } = require("uuid")

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
    getAllPosts
}