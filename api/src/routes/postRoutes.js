const express = require('express');
const { createPost, getAllPosts, deletePost, getPost, updatePost, updatePostPicture } = require('../controllers/postCtrls');
const router = express.Router();
const { authGuard, adminGuard } = require('../middlewares/authMiddleware');
const { uploadPicture } = require('../middlewares/uploadPicture');

router.get("/", getAllPosts);
router.put("/document/:slug", authGuard, updatePost);
router.post("/", authGuard, uploadPicture.single("image"), createPost);
router.put("/:slug", authGuard, updatePostPicture);
router.delete("/:slug", authGuard, deletePost);
router.get("/:slug", getPost);


module.exports = router;
