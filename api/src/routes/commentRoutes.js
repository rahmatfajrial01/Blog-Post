const express = require('express');
const router = express.Router();
const { createComment, getAllComments } = require('../controllers/commentCtrls');
const { authGuard } = require('../middlewares/authMiddleware');

router.post("/", authGuard, createComment);
router.get("/", getAllComments);

module.exports = router;
