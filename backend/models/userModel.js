const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },

    wubucks: {
        type: Number
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;