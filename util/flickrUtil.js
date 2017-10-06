var FlickrUtil = function () {

    var API_key = '&api_key=18274ea05dee494cc19c039b3588c60f&per_page=100&format=json&nojsoncallback=1';
    var endPoint_URL = 'https://api.flickr.com/services/rest/?method='

    var buildDefaultUrl = function (method) {
        return endPoint_URL+method+API_key;
    };

    var buildSearchUrl = function (method, tags) {
        return endPoint_URL+method+API_key+'&tags='+tags+'&sort=relevance';
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

    var getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * max) + min;  
    }

    return {
        buildDefaultUrl: buildDefaultUrl,
        buildSearchUrl: buildSearchUrl,
        buildImageUrl: buildImageUrl,
        getRandomNumber: getRandomNumber
    }
}

module.exports =  FlickrUtil();
