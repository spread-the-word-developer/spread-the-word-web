const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../frontend/build')));
const db = require('./config/keys').mongoURI;



app.use(bodyParser.json());




mongoose.connect(db).then(() => console.log("MongoDB Connected")).catch(err => console.log(err))

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
});
app.listen(5000, () => {
    console.log("The server is running opn port 5000")
});
module.exports = app;
