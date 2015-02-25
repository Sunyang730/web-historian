var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  fs.readFile(archive.paths.siteAssets + '/index.html', function (err, data){
    if (err){
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    //Data is HTML file. convert data to string with data.toString();
    res.end(data);
  });

};
