const mongoose = require('mongoose');
require('dotenv').config();

const db = mongoose.connection.db;

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

