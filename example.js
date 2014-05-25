"use strict";

var getSize = require('./');

getSize(process.env.FOLDER || process.cwd(), function(err, bytes) {
  if (err) { throw err; }

  console.log(bytes + ' bytes');
  console.log((bytes / 1024 / 1024).toFixed(2) + ' Mb');
});
