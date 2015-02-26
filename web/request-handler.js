var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelp = require('./http-helpers.js');
var runOnce = false;
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log('Request URL:', req.url);
  //if(req.url === '/' && req.method === 'GET'){
  if(req.url === '/'){
    console.log('I am in index');
    httpHelp.serveAssets(res, path.join(archive.paths.siteAssets, '/index.html'));
    //httpHelp.serveAssets(res, path.join(archive.paths.siteAssets, '/index.html'));
  }
  if(req.url === '/styles.css'){
    console.log('I am in style');
    httpHelp.serveAssets(res, path.join(archive.paths.siteAssets, '/styles.css'));
    //httpHelp.serveAssets(res, path.join(archive.paths.siteAssets, '/index.html'));
  }
  if(req.method === 'POST'){
    req.on('data', function(data){
      archive.addUrlToList(data.toString().slice(4) + '\n');
    });
  }
  // req.on('data', function(data){
  //   console.log('isUrlArchived:', httpHelp.checkArchive('www.google.com', archive.isUrlArchived));
  //   console.log('readListOfUrls:', archive.readListOfUrls());
  //   console.log('request handler console log:', archive.isUrlInList(data.toString().slice(4)));
  // });
};


//Visit the site.
//Main index page will be loaded
//A website will be taken from the input field.
 //POST method is send
  //Check if the Url is in the list. (isUrlInList)
  //If not in the list.
    //Add url to the list (addUrlToList)
    //Load the loading page (loading.html)
  //If it is in the list.
    //we check the archive list. (isUrlArchived)
      //if it is in archive lst.
        //we load the page.
      //if it is not.
        //load the loading page. (loading.html)


//Cron.
  //Run htmlfetcher.js
    //Read the list of the urls (readListOfUrls)
    //Iterate through each url and check if url is archived (isUrlArchived)
    //If not download urls, and add to archive folder
    //If it is, go to the next url in the list of site.txt
