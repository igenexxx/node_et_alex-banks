const https = require('https');
const fs = require('fs');

const req = https.get('https://en.wikipedia.org/wiki/Charlie_Brown', (res) => {
  const download = fs.createWriteStream('charlie-brown.html');
  res.pipe(download);

  res.on('end', () => {
    console.log('File downloaded');
  });
});

req.end();
