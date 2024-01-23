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

const getPost = async (req, res, next) => {
    try {
        const posts = await Post.findOne({ slug: req.params.slug }).populate("user").populate("categories");
        return res.json(posts);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });

        if (!post) {
            const error = new Error("Post aws not found");
            next(error);
            return;
        }
        post.title = req.body.title || post.title;
        post.caption = req.body.caption || post.caption;
        post.slug = req.body.slug || post.slug;
        post.body = req.body.body || post.body;
        post.tags = req.body.tags || post.tags;
        post.categories = req.body.categories || post.categories;

        const updateDocumetn = await post.save();

        return res.json(updateDocumetn)

    } catch (error) {
        next(error);
    }
};

const updatePostPicture = async (req, res, next) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });

        if (!post) {
            const error = new Error("Post aws not found");
            next(error);
            return;
        }

        const upload = uploadPicture.single("postPicture");

        const handleUpdatePostData = async () => {
            const updatedPost = await post.save();
            return res.json(updatedPost);
        };

        upload(req, res, async function (err) {
            if (err) {
                const error = new Error(
                    "An unknown error occured when uploading " + err.message
                );
                next(error);
            } else {
                // every thing went well
                if (req.file) {
                    let filename;
                    filename = post.photo;
                    if (filename) {
                        fileRemover(filename);
                    }
                    post.photo = req.file.filename;
                    handleUpdatePostData();
                } else {
                    let filename;
                    filename = post.photo;
                    post.photo = "";
                    fileRemover(filename);
                    handleUpdatePostData();
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPost,
    getAllPosts,
    deletePost,
    getPost,
    updatePost,
    updatePostPicture
}