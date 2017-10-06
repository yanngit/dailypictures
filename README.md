# Daily pictures
Get daily pictures from anything

## How to setup the application
### Run the application
This application is running on NodeJS and can be launched with 2 commands : 
```
npm install
npm run
```

Then you can access it via http://localhost:3000

### Run in debug mode
To enable the debug mode use the following command :
```
DEBUG=dailypictures:* npm run start
```

### Run in dev mode
The dev mode is used to reload the server automatically when there is file changes. The module nodemon is used and the command is the following :
```
npm run devstart
```

## How to use the application
By default the index page will display a random picture newly posted. It's possible to get some tag related pictures by accessing the ```/WhateverKeywordHere``` URL. 