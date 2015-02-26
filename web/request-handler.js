var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelp = require('./http-helpers.js');
var runOnce = false;
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  httpHelp.serveAssets(res, path.join(archive.paths.siteAssets, '/index.html'));
  req.on('data', function(data){
    archive.addUrlToList(data.toString().slice(4) + '\n');
    console.log('isUrlArchived:', archive.isUrlArchived('www.google.com'));
    console.log('readListOfUrls:', archive.readListOfUrls());
    console.log('request handler console log:', archive.isUrlInList(data.toString().slice(4)));
  });
};


