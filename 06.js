const filter = require('./06_filter');

const dir = process.argv[2] || '';
const ext = process.argv[3] || '';

filter(dir, ext, (err, files) => {
  if (err) {
    console.error('An error happend while trying to open the directory!');
    console.error(err);
  } else {
    files.forEach(f => console.log(f));
  }
});
