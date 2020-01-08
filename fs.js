const fs = require('fs');

fs.writeFile('message.txt', 'Hello there node!', (error) => {
    if(error) throw error;
    console.log('file has been written');
})