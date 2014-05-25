"use strict";

var exec = require('child_process').exec;

function getSize(path, callback) {
  var cmd = 'du -sk ' + path;

  exec(cmd, function(err, stdout, stderr) {
    if (err && stderr) { return callback(err); }

    callback(null, parseInt(stdout.trim().match(/^(\d+)/)[1]) * 1024);
  });
}

module.exports = getSize;
