const express = require('express');
const router = express.Router();
const { createComment, getAllComments, updateStatusComment, } = require('../controllers/commentCtrls');
const { authGuard, adminGuard } = require('../middlewares/authMiddleware');

router.post("/", authGuard, createComment);
router.get("/", getAllComments);
router.put("/:id", authGuard, adminGuard, updateStatusComment);

module.exports = router;
