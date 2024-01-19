const express = require('express');
const router = express.Router();
const { registerUser, loginUser, userProfile, getAllUser } = require('../controllers/userCtrls');
const { authGuard, adminGuard } = require('../middlewares/authMiddleware');

router.get("/", getAllUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);


module.exports = router;
