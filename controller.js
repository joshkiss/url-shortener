const ShortUrl = require('./models/url');

const getShort = async (req, res) => {
  const shortid = req.params.shortid;

  const rec = await ShortUrl.findOne({ short: shortid });

  if (!rec) return res.sendStatus(404);

  rec.clicks++;
  await rec.save();
  res.redirect(rec.full);
}

const postShort = async (req, res) => {
  const fullUrl = req.body.fullUrl;
  console.log('URL requested: ', fullUrl);

  const record = new ShortUrl({
    full: fullUrl
  });
  await record.save();
  res.redirect('/');
}

const getRoot = async (req, res) => {
  const allData = await ShortUrl.find();
  res.render('index', { shortUrls: allData })
}

module.exports = {
  getShort,
  getRoot,
  postShort
}