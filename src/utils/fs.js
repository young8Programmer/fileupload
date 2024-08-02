const fs = require("fs");
const path = require("path")

function redFile(filename) {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "database", `${filename}.json`), "utf-8", (err) => {
        if (err) {
            console.log(err.message);
        }
    }));
}

function writeFile(filename, data) {
    fs.writeFileSync(path.join(process.cwd(), "database", `${filename}.json`), JSON.stringify(data, null, 2), "utf-8", (err) => {
        if (err) {
            console.log(err.message);
        }
    })
};


module.exports = {
    redFile,
    writeFile
}