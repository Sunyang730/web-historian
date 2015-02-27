var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  fs.readFile(asset, function(err, data){
    if(err){
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    //Data is HTML file. convert data to string with data.toString();
    res.end(data);
  });
};

exports.sendResponse = function(response, message, statusCode){
  response.writeHead(statusCode, message);
}

exports.checkArchive = function(url, callback){
  console.log('I am out of checkArchive');
  fs.readdir(archive.paths.archivedSites, function(err, files){
    console.log('I am inside of readir of checkArchive');
    callback(files, url);
  });
  console.log('I am end of checkArchive');
};



// As you progress, keep thinking about what helper functions you can put here!

