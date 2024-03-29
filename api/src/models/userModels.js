const mongoose = require('mongoose'); // Erase if already required
const { hash, compare } = require('bcryptjs')
const { sign } = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    favorite: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],

}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await hash(this.password, 10);
        return next();
    }
    return next();
});

userSchema.methods.generateJWT = async function () {
    return await sign({
        id: this._id,
        avatar: this.avatar,
        username: this.username,
        email: this.email,
        admin: this.admin
    }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

