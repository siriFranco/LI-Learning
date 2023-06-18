const fs = require("fs");

let files = fs.readdirSync("./", function (err, files){
    if (err) {
        throw err;
    }
    console.log(files);
});

console.log("reading files"); */

let ipsum = fs.readFileSync("./readme.md", "UTF-8", (err, ipsum) =>{
    console.log(ipsum);
} );