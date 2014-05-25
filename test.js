"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

var child_process = {
  exec: function(cmd, cb) {
    setImmediate(function() {
      cb(null, '2476	../folder-size/');
    });
  }
};

describe('size-on-disk', function() {
  var getSize;

  before(function() {
    getSize = proxyquire.load('./index', {
      child_process: child_process
    });
  });

  it('should get the size on disk of the folder', function(done) {
    getSize('my_folder', function(err, bytes) {
      bytes.should.equal(2476 * 1024);

      done();
    });
  });
});
