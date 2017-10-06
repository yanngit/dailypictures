var express = require('express');
var request = require('request');
var router = express.Router();

var API_key = '&api_key=18274ea05dee494cc19c039b3588c60f&per_page=10&format=json&nojsoncallback=1';
var endPoint_URL = 'https://api.flickr.com/services/rest/?method='

var buildDefaultUrl = function (method) {
    return endPoint_URL+method+API_key;
};

var buildImageUrl = function (imageObject) {
    return 'http://farm'
        +imageObject.farm
        +'.staticflickr.com/'
        +imageObject.server
        +'/'
        +imageObject.id
        +'_'
        +imageObject.secret
        +'.jpg';
}

router.get('/', function(req, res, next) {
    var options = {
      method: 'post',
      body: null, // Javascript object
      json: true, // Use,If you are sending JSON data
      url: buildDefaultUrl('flickr.photos.getRecent'),
    }
    request(options, function (asyncErr, asyncRes, body) {
    if (asyncErr) {
        console.log('Error :', asyncErr)
        return
    }
        console.log(' Body :', JSON.stringify(body))
        res.render('index', { 
            imageUrl: buildImageUrl(body.photos.photo[0]), 
            imageAlt: body.photos.photo[0].title, 
        });
    });
});

module.exports = router;
