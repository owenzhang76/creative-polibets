const router = require('express').Router();
let User = require('../models/userModel');

router.route('/register').post((req, res) => {
    console.log("Inside /users/register Post");

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    let newUser = new User ({
        username: username,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname
    });

    console.log(newUser);

    newUser.save()
        .then(() => res.json('New user added!'))
        .catch(err => res.status(400).json('Error: ' + err))

    
});

module.exports = router;