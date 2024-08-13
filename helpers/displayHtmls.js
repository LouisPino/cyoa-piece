const fs = require('fs');
const path = require('path');


const displayPath = path.join(__dirname, '../display/default.html');
const displaySpacePath = path.join(__dirname, '../display/space.html');
const displaySwampPath = path.join(__dirname, '../display/swamp.html');


const display = fs.readFileSync(displayPath, 'utf-8');
const displaySpace = fs.readFileSync(displaySpacePath, 'utf-8');
const displaySwamp = fs.readFileSync(displaySwampPath, 'utf-8');

module.exports = [
    display,
    displaySpace,
    displaySwamp,
]