const router = require('express').Router();
let Post = require('../models/postModel');

router.route('/homepage').post((req, res) => {
    console.log("Inside /post/homepage Post");

    let eventname = req.body.eventname;
    let eventdescription = req.body.eventdescription;
    let optionA = req.body.optionA;
    let optionB = req.body.optionB;
    let optionACurrency = req.body.optionACurrency;
    let optionBCurrency = req.body.optionBCurrency;

    let newPost = new Post ({
        eventname: eventname,
        eventdescription: eventdescription,
        optionA: optionA,
        optionB: optionB,
        optionACurrency: optionACurrency,
        optionBCurrency: optionBCurrency
    });

    console.log(newPost);

    newPost.save()
        .then(() => res.json('New post added!'))
        .catch(err => res.status(400).json('Error: ' + err))

    
});

module.exports = router;