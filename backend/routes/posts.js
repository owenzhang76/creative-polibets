const router = require('express').Router();
let Post = require('../models/postModel');

router.route('/register').post((req, res) => {
    console.log("Inside /post/register Post");

    let postname = req.body.postname;
    let owner = req.body.owner;
    let A = req.body.A;
    let B = req.body.B;

    let newPost = new User ({
        postname: postname,
        owner: owner,
        A: A,
        B: B
    });

    console.log(newPost);

    newPost.save()
        .then(() => res.json('New post added!'))
        .catch(err => res.status(400).json('Error: ' + err))

    
});

module.exports = router;