const mongoose = require('mongoose');

let verifModelSchema = new mongoose.Schema
    (
        {
            email: {
                type: String,
                required: true,
            },
            userId: String,
            otp: String,
            createdAt: { type: Date, expires: '2m', default: Date.now }
        }
        // { timestamps: true }
    );

// verifModelSchema.index({ createdAt: 1 }, { expireAfterSeconds: 120 });

module.exports = mongoose.model('Verif', verifModelSchema);
