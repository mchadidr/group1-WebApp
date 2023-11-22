module.exports = function (app) {
    // Handle GET request for the profile page
    app.get('/profile', authenticateUser, profileController.getProfilePage);
  };
/*
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.server.controller');
const { authenticateUser } = require('../middleware/auth');
//Handle GET request for the profile page
router.get('/profile', authenticateUser, profileController.getProfilePage);

module.exports = router;*/
