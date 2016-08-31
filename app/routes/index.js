'user strict';

const h = require('../helpers/index.js');

module.exports = () => {
	let routes = { 
		'get' : { 
			'/' : (req, res, next) => {
				res.render('login');
			},
			'/rooms' : (req, res, next) => {
				res.render('rooms');
			},
			'/chat' : (req, res, next) => {
				res.render('chat');
			}
		},
		'post' : {

		},
		'NA': (req, res, next) => {
			res.status(404).sendFile(process.cwd()+'/views/404.htm');
		}
	}

	// Iterate through the routes object and mount the routes
	
	return h.route(routes); 
}

