const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || '';
const ext = (process.argv[3] ? '.' + process.argv[3]  : '');

fs.readdir(dir, (err, data) => {
  if (err) {
    console.warn('An error happend while trying to open the directory!');
    console.warn(err);
  } else {
    data
      .filter(fname => path.extname(fname) === ext)
      .forEach(e => console.log(e));
  }
});
