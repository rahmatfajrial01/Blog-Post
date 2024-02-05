const asyncHandler = require('express-async-handler');
const { uploadPicture } = require('../middlewares/uploadPicture');
// const { uploadPicture } = require('../middlewares/uploadPictureMIddleware');
const User = require("../models/userModels");
const Verif = require("../models/verifModels");
const { fileRemover } = require('../utils/fileRemover');
const sendEmail = require('./emailCtrl');
const { v4 } = require("uuid");


// const registerUser = asyncHandler(async (req, res) => {
//     const { username, email, password } = req.body;
//     let user = await User.findOne({ email });
//     if (!user) {
//         user = await User.create({
//             username,
//             email,
//             password,
//         });
//         return res.status(201).json({
//             _id: user._id,
//             avatar: user.avatar,
//             username: user.username,
//             email: user.email,
//             admin: user.admin,
//             token: await user.generateJWT(),
//         });
//     } else {
//         throw new Error("user already axists")
//     }
// });

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        let slug = v4()
        user = await User.create({
            slug,
            username,
            email,
            password,
        });
        let otp = `${Math.floor(1000 + Math.random() * 9000)}`
        const activationUrl = `your code ${otp}`;
        const data = {
            to: email,
            text: "hey User",
            subject: "activation",
            html: activationUrl
        }

        sendEmail(data)
        let verif
        verif = await Verif.create({
            userId: slug,
            otp,
            email,
        });
        res.status(201).json({
            email,
            userId: verif.userId,
            message: "please check email to activation account"
        });
    } else {
        throw new Error("user already axists")
    }
});

const createUser = asyncHandler(async (req, res) => {
    try {
        const { userId, otp } = req.body
        let findVerif = await Verif.findOne({ userId });
        if (!findVerif) throw new Error("please requees new otp")
        let user = await User.findOne({ email: findVerif.email });
        if (user) {
            if (findVerif.otp === otp) {
                await User.updateOne({ email: user.email }, { verified: true });
                await Verif.deleteMany({ userId });
                return res.status(201).json({
                    message: "user created"
                });
            } else {
                throw new Error("wrong otp")
            }
        } else {
            throw new Error("user already axists")
        }
    } catch (error) {
        throw new Error(error)
    }
});

const resetOtp = asyncHandler(async (req, res) => {
    try {
        const { userId } = req.body
        let user = await User.findOne({ slug: userId });
        if (user) {
            let otp = `${Math.floor(1000 + Math.random() * 9000)}`
            const activationUrl = `your code ${otp}`;
            const data = {
                to: user.email,
                text: "hey User",
                subject: "activation",
                html: activationUrl
            }
            sendEmail(data)

            await Verif.deleteMany({ userId });
            let verif
            verif = await Verif.create({
                userId,
                otp,
                email: user.email,
            });
            return res.status(201).json({
                message: "resent otp success"
            });
        } else {
            throw new Error("user already axists")
        }
    } catch (error) {
        throw new Error(error)
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
                verified: user.verified,
                slug: user.slug,
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
                verified: user.verified,
                // admin: user.admin,
                token: await user.generateJWT(),
            });
        } else {
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            const hashedPassword = generatedPassword;
            const newUser = new User({
                slug: v4(),
                username:
                    req.body.name.split(' ').join('').toLowerCase() +
                    Math.random().toString(36).slice(-8),
                email: req.body.email,
                password: hashedPassword,
                avatar: req.body.avatar,
                verified: true,
            });
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                avatar: newUser.avatar,
                username: newUser.username,
                email: newUser.email,
                verified: newUser.verified,
                // admin: newUser.admin,
                token: await newUser.generateJWT(),
            });
        }
    } catch (error) {
        next(error);
    }
};

const addToFavorite = async (req, res) => {
    const { _id } = req.user
    const { postId } = req.body
    try {
        const user = await User.findById(_id)
        const alreadyadded = user.favorite.find((id) => id.toString() === postId)
        if (alreadyadded) {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $pull: { favorite: postId },
                },
                {
                    new: true
                }
            )
            res.json(user)
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: { favorite: postId },
                },
                {
                    new: true
                }
            )
            res.json(user)
        }
    } catch (error) {
        throw new Error(error);
    }
}

const getFavorite = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate({
            path: 'favorite', populate: { path: 'user' }
        });
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    registerUser,
    loginUser,
    userProfile,
    getAllUser,
    updateProfile,
    updateProfilePicture,
    google,
    addToFavorite,
    getFavorite,
    createUser,
    resetOtp
}

