const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
let axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
//localhost:5000 

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors())
app.use(helmet())
// secure application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
let search = require('./routes/request');
// this route will be removed in the future

// API endpoints
app.get('/search/:query', (req,res)=> {
    const query = req.url.replace('/search/', '');
    console.log(query)
    // whatever the user inputs will be presented
    console.log(req.url + "is the base url")
    // req.url gets the inputted base url 

  axios(`https://itunes.apple.com/search?term=${query}`)
    .then((response) => {
      response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '300x200'));
      return response.data.results;
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
});


// catchall handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// send back the react page
//app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname+'/client/build/index.html'));
//});

//   listen to port

app.listen(port)
console.log(`We are listening on port ${port}`)