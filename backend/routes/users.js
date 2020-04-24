const router = require('express').Router();
const bcrypt = require('bcrypt');
const stripe = require('stripe')('sk_test_Ialnbc8Ba2hBjrEoLZdcsnY500UOJ57upo');
const uuid = require('uuid/v4');
// const paymentApi = require("./payment");
let User = require('../models/userModel');

// const stripeChargeCallback = res => (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   };

//   app.post("/", (req, res) => {
//     const body = {
//       source: req.body.token.id,
//       amount: req.body.amount,
//       currency: "usd"
//     };
//     stripe.charges.create(body, stripeChargeCallback(res));
// });




router.route('/payment').post((req, res) =>  {
    console.log("inside /users/charge for stripe boiii");
  //  const { product, token } = req.body;

  let product = req.body.product;
  let token = req.body.token;

    // const body = {
    //     product: req.body.product,
    //     token: req.body.token,
    //   };

    console.log("product", product);
    console.log("product price", product.price);
    idempontencyKey = uuid();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    })
    .then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name
        }, {idempontencyKey});
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

router.route('/edituser').post((req, res) => {
    console.log("Inside /users/edituser Post");

    console.log(req.body);

    let userID = req.body._id;
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;

    

    User.findOneAndUpdate({_id: userID}, 
        {username: username,
         firstname: firstname,
         lastname: lastname,
         email: email
        })
    .then(() => res.json('User updated!'))
    .catch(err => res.status(400).json('Error: ' + err))
    
    
});


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