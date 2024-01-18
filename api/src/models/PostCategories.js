const mongoose = require('mongoose');

const PostCategoriesSchema = new mongoose.Schema
    (
        {
            title: { type: String, required: true },
        },
        { timestamps: true }
    );

module.exports = mongoose.model('PostCategories', PostCategoriesSchema);
