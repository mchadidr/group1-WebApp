module.exports = function(app) {
	var index = require('../controllers/sign.server.controller');
	app.get('/sign', index.render);
};
