const request = require("request");
const fs = require("fs");

const commandLineArgs = process.argv.slice(2);
const url = commandLineArgs[0];
const localFilePath = commandLineArgs[1];

request(url, (error, response, body) => {   // don't remove "error, response" even if you won't use them!
  fs.writeFile(localFilePath, body, err => {
    if (err) console.error(err);
    
    fs.stat(localFilePath, (err1, stats) => {
      if (err1) console.error(err1);
      console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`);
      //process.exit();
    });
  });
});