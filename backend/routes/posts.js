const router = require('express').Router();
const bcrypt = require('bcrypt');
let Post = require('../models/postModel');
let User = require('../models/userModel');

router.route('/').get((req, res) => {
    console.log("Inside /posts get");

    Post.find({})
    .then(function(posts) {
        console.log(posts);
        return posts;
    }) 
    .then((data) => {res.json(data)})
    .catch(err => res.status(400).json('Error: ' + err))
})

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
        numberOfBetsA: 0,
        numberOfBetsB: 0
    });

    console.log(newPost);
    
    newPost.save()
    .then(() => res.json("new post added"))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/placebet').post((req, res) => {
    console.log('inside /posts/placbet post');
    
    let personId = req.body.personId;
    let postId = req.body.postId;
    let option = req.body.option;
    let value = req.body.value;

    Post.findById({_id: postId}, function(err, post) {
        if(err) {
            console.log(`error: ${err}`);
        } else if (!post) {
            console.log(`error: Could not find post`);
        } else {
            console.log(`post found: ${post}`);
            User.findOne({_id: personId}, function(err, user) {
                if (err) {
                    console.log(`error: ${err}`);
                } else if (!user) {
                    console.log(`error: Could not find user`);
                } else {
                    console.log(`user found: ${user}`);
                    let betted = false;
                    post.betters.forEach(better => {
                        if (user._id == better._id) {
                            console.log('you have already betted on this post');
                            betted = true;
                        }
                    });
                    if (!betted) {
                        console.log('inside not betted');
                        if (option == 'numberOfBetsA') {
                            console.log('option is A');
                            Post.update({_id: post._id}, {numberOfBetsA: post.numberOfBetsA++, $push: {betters: personId}, })
                        } else if (option == 'numberOfBetsB') {
                            Post.update({_id: post._id}, {numberOfBetsA: post.numberOfBetsA++, $push: {betters: personId}, })
                            console.log('option is B');
                        } else {
                            console.log('option is undefined');
                        }
                    } else {
                        console.log('inside betted');
                        if (option == 'numberOfBetsA') {
                            console.log('option is A');
                            Post.update({_id: post._id}, {numberOfBetsA: post.numberOfBetsA++}, function(err) {
                                if (err) {
                                    console.log(`error: ${err}`);
                                } else {
                                    res.json('post is updated!');
                                }
                            })
                        } else if (option == 'numberOfBetsB') {
                            Post.update({_id: post._id}, {numberOfBetsA: post.numberOfBetsA++}, function(err) {
                                if (err) {
                                    console.log(`error: ${err}`);
                                } else {
                                    res.json('post is updated!');
                                }
                            })
                            console.log('option is B');
                        } else {
                            console.log('option is undefined');
                        }
                    }
                }
            })
        }
    })
});

module.exports = router;