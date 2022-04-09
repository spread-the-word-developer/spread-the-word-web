const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const emails= require('./routes/api/emailSubcription');
//const authors = require('./routes/api/author');
const publications = require('./routes/api/publication');
app.use(express.static(path.join(__dirname, '../frontend/build')));
const db = require('./config/keys').mongoURI;

app.use(bodyParser.json());

mongoose.connect(db).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.use('/api/emailSubscription/', emails);
//app.use('/api/author/', authors);
app.use('/api/publication/',publications);

//serving public file
app.use(express.static(__dirname));

app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/files/publications/thumbnails', express.static(path.join(__dirname, 'files','publications','thumbnails')));
/*
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
});
*/
app.listen(5000, () => {
    console.log("The server is running on port 5000")

});
