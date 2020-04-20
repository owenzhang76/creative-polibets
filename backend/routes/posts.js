const router = require('express').Router();
const bcrypt = require('bcrypt');
let Post = require('../models/postModel');

router.route('/create').post((req, res) => {
    console.log("Inside /posts/create Post");

    let creator = req.body.creator;
    let title = req.body.title;
    let nameA = req.body.nameA;
    let oddsA = req.body.oddsA;
    let nameB = req.body.nameB;
    let oddsB = req.body.oddsB;
    let expiryDate = req.body.expiryDate;

    let newPost = new Post ({
        creator: creator,
        title: title,
        nameA: nameA,
        oddsA: oddsA,
        nameB: nameB,
        oddsB: oddsB,
        expiryDate: expiryDate,
        numberOfBets: 0
    });

    console.log(newPost);

    newPost.save()
    .then(() => res.json("new post added"))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;