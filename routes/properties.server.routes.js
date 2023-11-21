module.exports = function(app) {
	var index = require('../controllers/properties.server.controller');
	app.get('/properties', index.render);
};
