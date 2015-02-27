var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile(exports.paths.list, function(err, sites){
    sites = sites.toString().split('\n');
    if(callback){
      callback(sites);
    }
  });
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(sites){
    if(sites.indexOf(url) === -1){
      callback(false);
    }
    callback(true);
  });
};

exports.addUrlToList = function(url, callback){
  fs.appendFile(exports.paths.list, url + '\n', function(err, file){
    callback();
  });

  // exports.isUrlInList(url, function(exist){
  //   if(!exist){
  //     fs.appendFile(exports.paths.list, url, function(err){
  //       if (err) throw err;
  //       console.log('The "data to append" was appended to file!');
  //     });
  //   }
  // if(!exports.isUrlInList(function(url){
  //   fs.appendFile(exports.paths.list, url, function(err){
  //     if (err) throw err;
  //     console.log('The "data to append" was appended to file!');
  //   });
  // })
};

exports.isUrlArchived = function(url, callback){
  var completePath = path.join(exports.paths.archivedSites, url);
  fs.exists(completePath, function(exist){
    callback(exist);
  });



 // if(files.indexOf(url) !== -1){
 //  console
 //  return true;
 // }
 // return false;
};

exports.downloadUrls = function(urls){


};
