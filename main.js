const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello World</h1></body></html>');
  }
   else if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = {
      vegetable: ['cucumber', "carrot", "tomatoe"],
      fruits: ["banana", "pinaple", "mango"]
    };
    res.end(JSON.stringify(data));
  }
   else if (req.url === '/time') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ currentTime: new Date().toISOString() }));
  }
   else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
