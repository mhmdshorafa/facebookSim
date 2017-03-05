var fs = require('fs');
var writeindex = fs.readFileSync(__dirname + '/../../views/index.html','utf8');
module.exports = function(req, res) {
  res.end(writeindex);
};
