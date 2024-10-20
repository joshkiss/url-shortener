const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { getShort, postShort, getRoot } = require('./controller');
require('dotenv').config()
require('./db');
const ShortUrl = require('./models/url');

const port =process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', getRoot);
app.post('/short', postShort)
app.get('/:shortid', getShort);

mongoose.connection.on('open', async () => {
  // await ShortUrl.create({ full: 'http://google.com', short: '5xr' })
	// await ShortUrl.create({ full: 'http://codedamn.com' })
  app.listen(port, () => console.log(`server running on port: ${port}`));
});
