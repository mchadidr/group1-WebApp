const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();//oad environment variables from the .env file:


const app = express();

if (process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}else if (process.env.NODE_ENV === 'production') {
  app.use(compress());
}

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public/css'));
app.use(express.static('public/img'));

require('./routes/index.server.routes.js')(app);
require('./routes/sign.server.routes.js')(app);
require('./routes/properties.server.routes.js')(app);

app.use(express.static('./public'));

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