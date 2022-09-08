const { createServer } = require('http');
const { createReadStream } = require('fs');

const sendFile = (res, status, type, filePath) => {
  res.writeHead(status, { 'Content-Type': type });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  switch (req.url) {
    case '/':
      sendFile(res, 200, 'text/html', './home-page.html');
      break;
    case '/img/alex-banks.jpeg':
      sendFile(res, 200, 'image/jpeg', './alex-banks.jpeg');
      break;
    case '/styles.css':
      sendFile(res, 200, 'text/css', './styles.css');
      break;
    default:
      sendFile(res, 404, 'text/html', './404.html');
  }
}).listen(3000);

console.log('Web server listening on port %d', 3000);
