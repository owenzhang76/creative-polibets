const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },

    a: {
        type: Number,
        required: true
    },

    b: {
        type: Number,
        required: true
    },

}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;