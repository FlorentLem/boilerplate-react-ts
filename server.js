const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const defaultApi = require('./routes/index');

// Import dotenv config
require('dotenv').config();

// Initialize express app
const app = express();

// Express middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import mongoose cluster keys
const db = require('./config/keys').mongoConnect;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

// Initialize route api
app.use('/api', defaultApi);

// listen server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
