const User = require('../models/user.model');
exports.showProfile = (req, res) => {
    const user = req.user;

    res.render('profile', { user });
};
