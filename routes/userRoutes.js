const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateUser = require('../middleware/auth');
const bcrypt = require('bcrypt');


//Creating a new user
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Sign in and generate a Jsonwebtoken
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });


    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Protected route - Requires authentication
router.get('/profile', authenticateUser, (req, res) => {
  res.json({ profile: req.user });
});

//Updating user details
router.put('/profile/update', authenticateUser, async (req, res) => {
    try {
      const userId = req.user.id;
      const { name } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(userId, { name }, { new: true });
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//Deleting user account
router.delete('/profile/delete', authenticateUser, async (req, res) => {
    try {
      const userId = req.user.id;
  
      // Delete user account from the database
      await User.findByIdAndDelete(userId);
  
      res.json({ message: 'User account deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;
