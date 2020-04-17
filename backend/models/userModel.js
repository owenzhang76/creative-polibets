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

    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },

    firstname: {
        type: String, 
        required: true,
        trim: true,
    },

    lastname: {
        type: String, 
        required: true,
        trim: true,
    }
    // password: {
    //     type: String,
    //     required: true
    // },

    // eCurrency: {
    //     type: Number,
    //     required: true
    // },

    // postsTouched: {
    //     type: Object
    // }

});

const User = mongoose.model('User', userSchema);

module.exports = User;