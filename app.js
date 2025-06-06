// app.js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js App running on EC2!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
