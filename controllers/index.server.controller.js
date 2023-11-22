exports.render = function(req, res) {
    // Log the user data to the console
    console.log('User:', req.user);

	res.render('index', {
        title: 'TZ Real Estate',
        user: req.user
    })
};
