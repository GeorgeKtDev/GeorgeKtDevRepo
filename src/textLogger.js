"use strict";
exports.__esModule = true;
var fs = require("fs");
function logToFile(output) {
    var path = '../log.txt';
    //var access = fs.appendFile(path, output, );
    //access.write(output);
    //fs.writeFile(path, '', function(){console.log('done')}) Should Be Clearing Somewhere Along
    var access = fs.appendFileSync(path, output + "\n");
    console.log(output);
}
exports.logToFile = logToFile;
