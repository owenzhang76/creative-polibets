const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/userModel');

router.route('/register').post((req, res) => {
    console.log("Inside /users/register Post");
        
    let password = bcrypt.hashSync(req.body.password, 10);

    console.log(password);

    let username = req.body.username;
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
            throw(err);
        } else if (!user) {
            throw(`${req.body.username} not found`);
        } else {
            console.log(`this is the user: ${user}`);
            //res.render()
            if(bcrypt.compareSync(password, user.password)) {
                console.log("passwords match");
                return user;
            } else {
                throw("incorrect pass");
            }
        }
    })
    .then((data) => res.json(data))
    // .then(res.redirect('home', data));
    .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;