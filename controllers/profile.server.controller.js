
module.exports = function (app) {
  // Handle GET request for the profile page
  app.get('/profile', (req, res) => {
    const user = req.user;
    res.render('profile', { user });
  });
};
