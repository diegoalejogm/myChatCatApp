'use strict';
console.log("Welcome to ChatCat");

const express = require('express');
const app = express();
const chatCat = require('./app/index.js');

app.set('port', process.env.PORT || 3000);
//app.set('views', './views');
app.use(express.static('public'));
app.set( 'view engine', 'ejs');

//app.use('/', chatCat.router);



/// MIDDLEWARES EXAMPLE
/*
app.use('/', helloMiddleware);
let helloMiddleware = (req,res,next) => {
	req.hello = "Hello! It's me! I was wondering.....you get the idea!";
	next();
};

app.get('/dashboard', (req,res,next) => {
	res.send('<h1>This is the dashboard page, Middleware Says: ' + req.hello + '</h1>');
});

*/



app.listen(app.get('port'), () => {
	console.log('ChatCAT Running on Port: ', app.get('port'));
});