const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();//oad environment variables from the .env file:


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://mfranc99:COMP229@comp229.0zro2tz.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//USE USER ROUTES
app.use('/api/users', userRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});