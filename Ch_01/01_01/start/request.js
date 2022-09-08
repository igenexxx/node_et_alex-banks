const https = require('https');
const fs = require('fs').promises;

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/George_Washington',
  method: 'GET'
};

const req = https.request(options, (res) => {
  let responseBody = '';
  res.setEncoding('utf8');

  res.on('data', (d) => {
    console.log('---chunk--- %s', d.length);
    responseBody += d;
  });

  res.on('end', async () => {
    try {
      await fs.writeFile('george-washington.html', responseBody);
      console.log('File downloaded');
    } catch (err) {
      console.error(err);
    }
  })
});

req.end();
