const http = require('http');


function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const server2 = http.createServer((req, res) => {
  if (req.url === '/movie') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const movies = [
      { title: 'Interstellar', genre: 'Sci-Fi', director: 'Christopher Nolan', year: 2014 },
      { title: 'The Godfather', genre: 'Crime', director: 'Francis Ford Coppola', year: 1972 },
      { title: 'The Dark Knight', genre: 'Action', director: 'Christopher Nolan', year: 2008 }
    ];
    res.end(JSON.stringify(getRandomItem(movies)));
  } else if (req.url === '/number') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const jackpotNumbers = [111, 222, 333, 444, 555, 666, 777, 888, 999];
    const result = {
      number: randomNumber,
      message: jackpotNumbers.includes(randomNumber) ? 'You win the jackpot!' : 'Try again!'
    };
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

server2.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
