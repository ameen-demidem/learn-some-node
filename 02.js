console.log(
  process.argv.slice(2)
    .map(e => Number(e))
    .reduce((a,e) => a + e, 0)
);
