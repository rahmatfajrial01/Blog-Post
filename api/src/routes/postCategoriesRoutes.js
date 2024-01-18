const express = require('express');
const router = express.Router();
const { getAllPostCategories, createPostCategory, updatePostCategory, deletePostCategory } = require('../controllers/postCategoryCrtls');
const { authGuard, adminGuard } = require('../middlewares/authMiddleware');

router.get("/", getAllPostCategories);
router.post("/", authGuard, adminGuard, createPostCategory);
router.put("/:postCategoryId", authGuard, adminGuard, updatePostCategory);
router.delete("/:postCategoryId", authGuard, adminGuard, deletePostCategory);
// router.put("/document/:slug", authGuard, adminGuard, updatePostDocument);
// router.get("/:slug", getPost);


module.exports = router;