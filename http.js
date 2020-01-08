const http = require('http');
// const server = http.createServer((req, res) => {
//     res.write('Hello there user')
//     res.end();
// });

const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/user') {
        res.write('Welcome user levi')
        res.end();
    }
});
server.listen(3000, () => console.log('Server is up and running'));