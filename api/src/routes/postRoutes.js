const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postCtrls');
const router = express.Router();
const { authGuard, adminGuard } = require('../middlewares/authMiddleware');
const { uploadPicture } = require('../middlewares/uploadPicture');

router.get("/", getAllPosts);
// router.put("/document/:slug", authGuard, adminGuard, updatePostDocument);
router.post("/", authGuard, uploadPicture.single("image"), createPost);
// router.put("/:slug", authGuard, adminGuard, updatePost);
// router.delete("/:slug", authGuard, adminGuard, deletePost);
// router.get("/:slug", getPost);


module.exports = router;
