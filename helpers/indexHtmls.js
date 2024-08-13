const fs = require('fs');
const path = require('path');


//MAKE THIS PROGRAMATIC
const indexPath = path.join(__dirname, '../mobile/default.html');
const indexSpacePath = path.join(__dirname, '../mobile/space.html');
const indexSwampPath = path.join(__dirname, '../mobile/swamp.html');
const indexVotePath = path.join(__dirname, '../mobile/vote.html');
const indexThankPath = path.join(__dirname, '../mobile/thank.html');

const index = fs.readFileSync(indexPath, 'utf-8');
const indexSpace = fs.readFileSync(indexSpacePath, 'utf-8');
const indexSwamp = fs.readFileSync(indexSwampPath, 'utf-8');
const indexVote = fs.readFileSync(indexVotePath, 'utf-8');
const indexThank = fs.readFileSync(indexThankPath, 'utf-8');

module.exports = [
    index,
    indexSpace,
    indexSwamp,
    indexVote,
    indexThank
]