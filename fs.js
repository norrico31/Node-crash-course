const fs = require('fs');

// fs.writeFile('message.txt', 'Hello there node!', (error) => {
//     if(error) throw error;
//     console.log('file has been written');
// });
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})