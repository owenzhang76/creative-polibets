const express = require('express');
const cors = require('cors');

require('dotenv').config();

const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});