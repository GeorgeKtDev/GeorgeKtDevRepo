import * as fs from "fs";

export function logToText(output)
{

//     const { exec } = require('child_process');
// exec('tsc *.js > log.txt | wc -l', (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

    // write to a new file named log.txt
    fs.appendFile('log.txt', output, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log(output);
    });
}
