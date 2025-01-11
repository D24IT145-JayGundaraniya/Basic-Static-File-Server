import http from 'http';
import fs from 'fs';
import path from 'path';

http.createServer((req, res) => {
  const filePath = `./public${req.url === '/' ? '/index.html' : req.url}`;
  const extname = path.extname(filePath);
  const contentType = 'text/html';

  fs.readFile(filePath, (err, content) => {
    res.writeHead(err ? 404 : 200, { 'Content-Type': err ? 'text/plain' : contentType });
    res.end(err ? '404 Not Found' : content);
  });
}).listen(3000);
