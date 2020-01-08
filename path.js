const path = require('path');
const fileLocation = path.join(__dirname, 'app.js');
const fileName = path.extname(fileLocation);
console.log(`The basename of the path is: ${fileName}`)