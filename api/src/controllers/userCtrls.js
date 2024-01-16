const asyncHandler = require('express-async-handler');
// const { uploadPicture } = require('../middlewares/uploadPictureMIddleware');
const User = require("../models/userModels");
// const { fileRemover } = require('../utils/fileRemover');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({
            username,
            email,
            password,
        });
        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            username: user.username,
            email: user.email,
            admin: user.admin,
            token: await user.generateJWT(),
        });
    } else {
        throw new Error("user already axists")
    }
});


const loginUser = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            throw new Error("Email not found");
        }
        if (await user.comparePassword(password)) {
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                username: user.username,
                email: user.email,
                // verified: user.verified,
                // admin: user.admin,
                token: await user.generateJWT(),
            });
        } else {
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        next(error);
    }
})

const userProfile = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id);

        if (user) {
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                username: user.username,
                email: user.email,
                // verified: user.verified,
                admin: user.admin,
            });
        } else {
            let error = new Error("User not found");
            error.statusCode = 404;
            next(error);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    userProfile
}