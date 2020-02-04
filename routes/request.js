let express = require('express');
let router = express.Router();
let axios = require('axios');

router.get('/', ( req,res,next )=> {
    // get request to the request file .. will call api
    const query = req.baseUrl.replace('/search/', '');
    res.send("We are inside the request");
    console.log(req.baseUrl)

   fetch(`https://itunes.apple.com/search?term=${query}`)
     .then((response) => {
       response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '300x200'));
       return response.data.results;
     }).then((response) => {
       res.json(response);
       console.log(response)
     }).catch((error) => console.error(error));

});

module.exports = router;
