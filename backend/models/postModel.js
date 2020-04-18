const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    eventname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },

    // owner : {
    //     type: Object,
    //     required: true,
    // },

    eventdescription: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },

    optionA: {
        type: String,
        required: true
    },

    optionB: {
        type: String,
        required: true
    },

    optionACurrency: {
        type: Number,
        required: true
    },

    optionBCurrency: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;