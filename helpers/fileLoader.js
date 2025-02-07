const fs = require('fs');
const path = require('path');
const locations = require("./locations.js");

// Directories for HTML files
const mobileDir = path.join(__dirname, '../mobile/html');
const mobileExtrasDir = path.join(__dirname, '../mobile/html/extras');
const displayDir = path.join(__dirname, '../display/html');
const displayExtrasDir = path.join(__dirname, '../display/html/extras');

// Directory for JS scripts
const mobileScriptsDir = path.join(__dirname, '../mobile/scripts');
const displayScriptsDir = path.join(__dirname, '../display/scripts');

// Function to read all HTML files in a directory
function readHtmlFiles(dir) {
    return fs.readdirSync(dir)
        .filter(file => path.extname(file) === '.html')
        .map(file => {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const name = path.basename(file, '.html');
            return { name, content };
        });
}

// Function to read all JavaScript files in a directory
function readScriptFiles(dir) {
    return fs.readdirSync(dir)
        .filter(file => path.extname(file) === '.js')
        .map(file => {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const name = path.basename(file, '.js');
            return { name, content };
        });
}

// Loop through locations and add HTML content for mobile and display
for (const [k, v] of Object.entries(locations)) {
    let filename = k;
    v.html.mobile = getMobile(filename);
    v.html.display = getDisplay(filename);
}

// Get contents of all HTML files in the extras directories
const mobileExtras = readHtmlFiles(mobileExtrasDir);
const displayExtras = readHtmlFiles(displayExtrasDir);

// Get contents of all JavaScript files in the scripts directory
const mobileScripts = readScriptFiles(mobileScriptsDir);
const displayScripts = readScriptFiles(displayScriptsDir);

// Helper functions to get a single HTML file for mobile and display
function getMobile(filename) {
    const filePath = path.join(mobileDir, `${filename}.html`);
    return fs.readFileSync(filePath, 'utf8');
}

function getDisplay(filename) {
    const filePath = path.join(displayDir, `${filename}.html`);
    return fs.readFileSync(filePath, 'utf8');
}

module.exports = [locations, mobileExtras, displayExtras, displayScripts, mobileScripts];
