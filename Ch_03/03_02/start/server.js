const fs = require('fs');
const express = require('express');

const skiTerms = require('./ski_terms.json');

const save = async () => {
  try {
    await fs.promises.writeFile('./ski_terms.json', JSON.stringify(skiTerms, null, 2));
  } catch (e) {
    console.error(e);
    throw new Error('Unable to save ski terms');
  }
}

const app = express();

app.use(express.static('./client'));

app.get('/dictionary', (req, res) => {
  res.json(skiTerms);
});

app.post('/dictionary', express.json(), async (req, res) => {
  skiTerms.push(req.body);
  await save();

  res.json({
    status: 'success',
    term: req.body,
  })
});

app.listen(3000, () => console.log('Alex\'s personal website running on port 3000'));
