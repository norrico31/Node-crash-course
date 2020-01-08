const url = require('url')
const address = 'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
const parsedUrl = url.parse(address, true);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);