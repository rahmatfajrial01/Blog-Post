const asyncHandler = require('express-async-handler');
const { uploadPicture } = require('../middlewares/uploadPicture');
// const { uploadPicture } = require('../middlewares/uploadPictureMIddleware');
const User = require("../models/userModels");
const { fileRemover } = require('../utils/fileRemover');

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

const getAllUser = async (req, res, next) => {
    try {
        const allUser = await User.find({}).select('-password');
        return res.json(allUser);
    } catch (error) {
        next(error);
    }
};

const updateProfile = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id);

        if (!user) {
            throw new Error("User not found");
        }

        user.avatar = req.body.avatar || user.avatar;
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        if (req.body.password && req.body.password.length < 5) {
            throw new Error("Password length must be at least 5 character");
        } else if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUserProfile = await user.save();

        res.json({
            _id: updatedUserProfile._id,
            avatar: updatedUserProfile.avatar,
            username: updatedUserProfile.username,
            email: updatedUserProfile.email,
            // verified: updatedUserProfile.verified,
            admin: updatedUserProfile.admin,
            token: await updatedUserProfile.generateJWT(),
        });
    } catch (error) {
        next(error);
    }
};

const updateProfilePicture = async (req, res, next) => {
    try {
        const upload = uploadPicture.single("profilePicture");

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
                    let updatedUser = await User.findById(req.user._id);
                    filename = updatedUser.avatar;
                    if (filename) {
                        fileRemover(filename);
                    }
                    updatedUser.avatar = req.file.filename;
                    await updatedUser.save();
                    res.json({
                        _id: updatedUser._id,
                        avatar: updatedUser.avatar,
                        // username: updatedUser.username,
                        // email: updatedUser.email,
                        // verified: updatedUser.verified,
                        // admin: updatedUser.admin,
                        // token: await updatedUser.generateJWT(),
                    });
                } else {
                    let filename;
                    let updatedUser = await User.findById(req.user._id);
                    filename = updatedUser.avatar;
                    updatedUser.avatar = "";
                    await updatedUser.save();
                    // fileRemover(filename);
                    res.json({
                        _id: updatedUser._id,
                        avatar: updatedUser.avatar,
                        // username: updatedUser.username,
                        // email: updatedUser.email,
                        // verified: updatedUser.verified,
                        // admin: updatedUser.admin,
                        // token: await updatedUser.generateJWT(),
                    });
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
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
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            const hashedPassword = generatedPassword;
            const newUser = new User({
                username:
                    req.body.name.split(' ').join('').toLowerCase() +
                    Math.random().toString(36).slice(-8),
                email: req.body.email,
                password: hashedPassword,
                avatar: req.body.avatar,
            });
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                avatar: newUser.avatar,
                username: newUser.username,
                email: newUser.email,
                // verified: newUser.verified,
                // admin: newUser.admin,
                token: await newUser.generateJWT(),
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    userProfile,
    getAllUser,
    updateProfile,
    updateProfilePicture,
    google
}

