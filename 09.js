const http = require('http');
const bl = require('bl');

const url1 = process.argv[2] || '';
const url2 = process.argv[3] || '';
const url3 = process.argv[4] || '';

q = new Queue(3, console.log);

getInOrder(url1, q, 1);
getInOrder(url2, q, 2);
getInOrder(url3, q, 3);

function getInOrder(url, q, position) {
  http.get(url, response => {
    response.pipe(bl((err, data) => {
      return err ?
        console.error(err) :
        q.add(data.toString(), position);
    }));
  }).on('error', console.error);
}

function Queue(max, cb) {
  let counter = 0;
  let queue = new Array(max);

  return {
    add: function(data, position) {
      if (!position || position > max || queue[position-1]) return;
      queue[position - 1] = data;
      counter++;
      if (counter === max) {
        queue.forEach(e => cb(e));
      }
    }
  };
}
