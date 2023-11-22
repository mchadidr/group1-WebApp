exports.render = function (req, res) {
    res.render('contact', {
        title: 'Contact Us',
        user: req.user
    });
};
