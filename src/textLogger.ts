import * as fs from "fs";

export function logToFile(output)
{
    let path = '../log.txt';

    //var access = fs.appendFile(path, output, );
    //access.write(output);

    //fs.writeFile(path, '', function(){console.log('done')}) Should Be Clearing Somewhere Along
    var access = fs.appendFileSync(path, output + "\n");

    console.log(output);
}