const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    creator: {
        type: String, 
        required: true, 
    },

    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },

    nameA: {
        type: String,
        required: true
    },

    oddsA: {
        type: Number,
        required: true
    },

    nameB: {
        type: String,
        required: true
    },

    oddsB: {
        type: Number,
        required: true
    },

    expiryDate: {
        type: Date,
        required: true
    },

    numberOfBetsA: {
        type: Number,
    },

    numberOfBetsB: {
        type: Number,
    },

    betters: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;