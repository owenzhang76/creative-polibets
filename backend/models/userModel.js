const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },

    password: {
        type: String,
        required: true
    },

    eCurrency: {
        type: Number,
        required: true
    },

    postsTouched: {
        type: Object
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;