const fs = require('fs');
const path = require('path');
const locations = require("./locations.js")
const mobileDir = path.join(__dirname, '../mobile');
const displayDir = path.join(__dirname, '../display');
// Function to read all HTML files in a directory
function readHtmlFiles(directory) {
    const files = fs.readdirSync(directory); // Get all files in the directory
    const htmlFiles = files.filter(file => path.extname(file) === '.html'); // Filter only HTML files

    return htmlFiles.map(file => {
        const filePath = path.join(directory, file); // Construct the full file path
        return fs.readFileSync(filePath, 'utf-8'); // Read and return file content
    });
}

for (const [k, v] of Object.entries(locations)) {
    let filename = k
    v.html.mobile = getMobile(filename)
    v.html.display = getDisplay(filename)
    console.log(v.html)
}

// Directory containing HTML files


// Get contents of all HTML files in the directory
const mobileHtmls = readHtmlFiles(mobileDir);
const displayHtmls = readHtmlFiles(displayDir);


function getMobile(filename) {
    const filePath = path.join(mobileDir, `${filename}.html`); // Construct the full file path
    return fs.readFileSync(filePath, 'utf-8');
}

function getDisplay(filename) {
    const filePath = path.join(displayDir, `${filename}.html`); // Construct the full file path
    return fs.readFileSync(filePath, 'utf-8');
}
module.exports = [locations];
