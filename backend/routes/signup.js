const User = require('../models/userModel');

module.exports = app => {
    app.post('/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            password,
            email,
            firstname,
            lastname
        } = body;
    
        if(!firstname) {
            return res.send({
                success: false,
                message: "error: missing first name"
            })
        }

        if(!password) {
            return res.send({
                success: false,
                message: "error: missing password"
            })
        }

        if(!lastname) {
            return res.send({
                success: false,
                message: "error: missing last name"
            })
        }

        if(!email) {
            return res.send({
                success: false,
                message: "error: missing email"
            })
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: "error: server error"
                });
            } else if (previousUsers.length>0) {
                return res.send({
                    success: false,
                    message: "error: account exists"
                });
            } 
                const newUser = new User();

                    newUser.password = newUser.generateHash(password,) 
                    newUser.email = email;
                    newUser.firstname = firstname;
                    newUser.lastname = lastname;

                    newUser.save((err, user) => {
                        if (err) {
                            return res.send({
                                success: false,
                                message: "error: server error"
                            });
                        }

                        return res.send({
                            success: true,
                            message: "user created"
                    });
                });
            });
        });
    }