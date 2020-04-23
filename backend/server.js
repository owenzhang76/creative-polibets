const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const stripe = require('stripe')('sk_test_Ialnbc8Ba2hBjrEoLZdcsnY500UOJ57upo');

require('dotenv').config();

const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

// mongo setup
const uri = process.env.ATLAS_URI; mongoose.connect(uri, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("successfully established connection to MongoDB");
})

// require files
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

// user files
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.post('/charge', function(req, res)  {
    console.log("inside /users/charge for stripe boiii");
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});