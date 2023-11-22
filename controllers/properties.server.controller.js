exports.render = function(req, res) {
    res.render('properties', {
        title: 'TZ Real Estate',
        user: req.user
    });
};
