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
  fs.readFile(archive.paths.siteAssets + asset, function(err, data){
    if(err){
      fs.readFile(archive.paths.archivedSites + asset, function(err, data){
        if(err){
          callback ? callback() : exports.sendError(res);
        } else {
          exports.sendResponse(res, data);
        }
      });
    } else {
      exports.sendResponse(res, data);
    }


  });
};

exports.sendError = function(response){
  response.writeHead(404, 'Page Not Found', headers);
  response.end();
};

exports.sendResponse = function(response, obj, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(obj);
};

exports.collectionData = function(request, callback){
  var stringData = '';
  request.on('data', function(data){
    stringData += data;
  });
  request.on('end', function(){
    callback(stringData);
  });
};



// As you progress, keep thinking about what helper functions you can put here!

