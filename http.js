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
            res.end(data);
        });
    }
    if(req.url === '/user') {
        res.write('Welcome user levi')
        res.end();
    }
    if(req.url === '/api/users') {
        const users = [
            { name: "levi", age: 20 },
            { name: "mikasa", age: 18 },
            { name: "gerald", age: 26 }
        ]
        res.end(JSON.stringify(users));
    }
});
server.listen(3000, () => console.log('Server is up and running'));