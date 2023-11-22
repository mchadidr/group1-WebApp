const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const { authenticateUser } = require('../middleware/auth.middleware');
//Handle GET request for the profile page
router.get('/profile', authenticateUser, profileController.getProfilePage);

module.exports = router;
