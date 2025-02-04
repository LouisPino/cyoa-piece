const fs = require('fs');
const path = require('path');
const locations = require("./locations.js")
const mobileDir = path.join(__dirname, '../mobile/html');
const mobileExtrasDir = path.join(__dirname, '../mobile/html/extras');
const displayExtrasDir = path.join(__dirname, '../display/html/extras');
const displayDir = path.join(__dirname, '../display/html');
// Function to read all HTML files in a directory
function readHtmlFiles(dir) {
    return fs.readdirSync(dir)
        .filter(file => path.extname(file) === '.html')
        .map(file => {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const name = path.basename(file, '.html');
            return { name: name, content: content };
        });
}

for (const [k, v] of Object.entries(locations)) {
    let filename = k
    v.html.mobile = getMobile(filename)
    v.html.display = getDisplay(filename)
}



// Get contents of all HTML files in the directory
const mobileExtras = readHtmlFiles(mobileExtrasDir);
const displayExtras = readHtmlFiles(displayExtrasDir);


function getMobile(filename) {
    const filePath = path.join(mobileDir, `${filename}.html`); // Construct the full file path
    return fs.readFileSync(filePath, 'utf-8');
}

function getDisplay(filename) {
    const filePath = path.join(displayDir, `${filename}.html`); // Construct the full file path
    return fs.readFileSync(filePath, 'utf-8');
}
module.exports = [locations, mobileExtras, displayExtras];
