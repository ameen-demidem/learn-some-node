const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, cb) {
  if (!cb || typeof cb !== 'function') return null;
  if (ext !== '') ext = '.' + ext;
  fs.readdir(dir, (err, data) =>
    err ?
      cb(err) :
      cb(null, data.filter(fname => path.extname(fname) === ext))
  );
};
