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

router.route('/login').post((req, res) => {
    console.log("Inside /users/login Post");

    let username = req.body.username;
    let password = req.body.password;

    let checkUser = new User ({
        username: username,
        password: password,
    });

    console.log(checkUser);

    User.findOne({username: req.body.username}, function(err, user) {
        if (err) {
            console.log(err);
        } else if (!user) {
            console.log(`${req.body.username} not found`);
        } else {
            console.log(`this is the user: ${user}`);
            //res.render()
        }
    })
    // .then((data) => {
    //     const stuff = res.json(data);
    //     console.log("yeet");
    //     console.log(stuff);
    //     res.redirect('/home', stuff)
    // })
    .then((data) => res.json(data))
    // .then(res.redirect('home', data));
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;