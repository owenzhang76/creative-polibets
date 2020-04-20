const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    postName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },

    A: {
        type: Number,
        required: true
    },

    B: {
        type: Number,
        required: true
    },

    postsTouched: {
        type: Object
    }

}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;