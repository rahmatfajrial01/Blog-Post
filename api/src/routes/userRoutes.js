const express = require('express');
const router = express.Router();
const { registerUser, loginUser, userProfile, getAllUser, updateProfile, updateProfilePicture, google, addToFavorite, getFavorite, createUser, resetOtp } = require('../controllers/userCtrls');
const { authGuard, adminGuard } = require('../middlewares/authMiddleware');

router.get("/", getAllUser);
router.post("/register", registerUser);
router.post("/verif", createUser);
router.post("/resent-verif", resetOtp);
router.post("/login", loginUser);
router.post("/google", google);
router.get("/profile", authGuard, userProfile);
router.put("/update-profile", authGuard, updateProfile);
router.put("/update-profile-picture", authGuard, updateProfilePicture);
router.put("/favorite", authGuard, addToFavorite)
router.get("/favorite", authGuard, getFavorite)

module.exports = router;
