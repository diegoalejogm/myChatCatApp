'use strict';
const router = require('express').Router();
/* 
router.get('/', (req, res, next) => {
	//res.sendFile(__dirname + '/views/login.htm')
	res.render('login', {
		pageTitle: 'My Login Page'
	});
});


router.get('/info', ( req, res, next) => {
	res.send( 'Test Page');
});

*/
module.exports = {
	router : require('./routes/index.js')()
};
