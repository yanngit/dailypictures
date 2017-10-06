var express = require('express');
var request = require('request');
var flickrUtil = require('../util/flickrUtil');

var router = express.Router();


router.get('/', function(req, res, next) {
    var options = {
      method: 'post',
      body: null, // Javascript object
      json: true, // Use,If you are sending JSON data
      url: flickrUtil.buildDefaultUrl('flickr.photos.getRecent'),
    }
    request(options, function(asyncErr, asyncRes, body) {
    if (asyncErr) {
        console.log('Error :', asyncErr)
        return
    }
        console.log(' Body :', JSON.stringify(body))
        res.render('index', { 
            imageUrl: flickrUtil.buildImageUrl(body.photos.photo[0]), 
            imageAlt: body.photos.photo[0].title, 
        });
    });
});

router.get('/:subject', function(req, res, next) {
    var options = {
      method: 'post',
      body: null, // Javascript object
      json: true, // Use,If you are sending JSON data
      url: flickrUtil.buildSearchUrl('flickr.photos.search',req.params.subject),
    }
    request(options, function(asyncErr, asyncRes, body) {
    if (asyncErr) {
        console.log('Error :', asyncErr)
        return
    }
        console.log(' Body :', JSON.stringify(body))
        var randomNumber = flickrUtil.getRandomNumber(0,100);
        res.render('index', { 
            imageUrl: flickrUtil.buildImageUrl(body.photos.photo[randomNumber]), 
            imageAlt: body.photos.photo[randomNumber].title, 
        });
    });
});

module.exports = router;
