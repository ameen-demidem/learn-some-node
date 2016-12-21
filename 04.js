const fs = require('fs');

const fileName = process.argv[2] || '';

fs.readFile(fileName, (err, data) => {
  if (err) {
    console.warn('An error happend while trying to open the file!');
    console.warn(err);
  } else {
    console.log(data.reduce((a,c) => c===10 ? a+1 : a, 0));
  }
});
