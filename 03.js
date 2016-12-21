const fs = require('fs');

let counter = 0;
fs.readFileSync(process.argv[2]).forEach( c => c===10 ? counter++ : null );
console.log(counter);
