var fs = require('fs');
var path = require('path');
var _ = require('underscore');

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
  fs.readFile(this.paths.list, function(err, files){
    callback(files.toString());
  });
};

exports.isUrlInList = function(url, callback){
  this.readListOfUrls(function(url){
    var arrayOfUrls = url.split('\n');
    if(arrayOfUrls.indexOf(url) === -1){
      callback(false);
    }
    callback(true);
  });
};

exports.addUrlToList = function(url){
  this.isUrlInList(url, function(exist){
    if(!exist){
      fs.appendFile(exports.paths.list, url, function(err){
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    }
  });
  // if(!this.isUrlInList(function(url){
  //   fs.appendFile(this.paths.list, url, function(err){
  //     if (err) throw err;
  //     console.log('The "data to append" was appended to file!');
  //   });
  // })
};

exports.isUrlArchived = function(files, url){
 if(files.indexOf(url) !== -1){
  console
  return true;
 }
 return false;
};

exports.downloadUrls = function(){
};
