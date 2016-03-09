var express = require('express'),
    app = express(),
    middleware = require('./middleware.js');

const PORT = process.env.PORT || 3000;  // process.env.PORT — heroku env variable for port to listen to



/*
 * req — request object
 * res — response object
 * 
 * req hold all the information sent from the user:
 * -- url
 * -- json
 * -- cookies
 * -- other data
 * 
 * res what we send back
 */



app.use(middleware.logger) // app-level middleware

// use public folder
app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function (req, res) { // route-level middleware
    res.send('About Us');
});


/*
 * listen to port:3000
 * function gets called once server starts
 */

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '...');
});