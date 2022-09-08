const express = require('express');

const skiTerms = require('./ski_terms.json');

const app = express();

app.use(express.static('./client'));

app.get('/dictionary', (req, res) => {
  res.json(skiTerms);
});

app.listen(3000, () => console.log('Alex\'s personal website running on port 3000'));
