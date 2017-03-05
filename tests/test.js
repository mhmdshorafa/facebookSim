var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');

test('GET /: should return index.html', function(t) {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/'
  }, function(res) {
    var indexOf = res.payload.indexOf('h1');
    console.log('indexOf', indexOf);
    t.notEqual(indexOf, -1, 'got header 1 somewhere in the html');
    t.end();
  });
});
