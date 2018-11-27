
var fs = require("fs");
var path = require("path");
 
/**
 * Recursive function to check dir for the EXT and File name
 * @param {path} dir The path to the checked dir
 */
var checkDir = function(dir) {
  // when a function finishes, it calls the callback with its finished values
  // so fs.readdir() takes two parameters: fs.readdir(directory, function(err, items))
  // so when fs.readdir finishes it calls that function.
  fs.readdir(dir, (err, items) => {
    // Same here, a callback for each item is called
    items.forEach(item => {
      // same here, get the stats for each file to check if its a directory
      fs.stat(dir + "\\" + item, (err, stats) => {
        // check if indexOf...
        if (item.indexOf(name) > -1 && item.indexOf(ext) > -1) {
          // Print
          console.log("Found a match: " + dir + "\\" + item);
        }
        // Recursive call
        if (stats.isDirectory()) {
          checkDir(dir + "\\" + item);
        }
      });
    });
  });
};
 
/** PROGRAM STARTS HERE */
 
// Base directory
var _dir = path.join("C:\\", "MyFolder");
 
// Check if we are given 2 arguments, node search.js [ext] [text]
//                                     [0]    [1]     [2]    [3]
if (process.argv.length < 4) {
  // Error - not enough arguments
  console.log("Usage:  node search.js [EXT] [TEXT]");
  // Exit
  process.exit(-1);
}
// Save in variables
// Note - JS variables are FUCKING GLOBAL, you can use them anywhere
var ext = process.argv[2];
var name = process.argv[3];
 
// Call our function which is on top of the fucking file and defined strangely like a variable because
// it's JS and we can do shit like that
checkDir(_dir);