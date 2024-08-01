const fs = require('fs');
const path = require('path');


//MAKE THIS PROGRAMATIC
const indexPath = path.join(__dirname, '../mobile/index.html');
const indexSpacePath = path.join(__dirname, '../mobile/indexSpace.html');
const indexSwampPath = path.join(__dirname, '../mobile/indexSwamp.html');
const indexVotePath = path.join(__dirname, '../mobile/indexVote.html');

const index = fs.readFileSync(indexPath, 'utf-8');
const indexSpace = fs.readFileSync(indexSpacePath, 'utf-8');
const indexSwamp = fs.readFileSync(indexSwampPath, 'utf-8');
const indexVote = fs.readFileSync(indexVotePath, 'utf-8');

module.exports = [
    index,
    indexSpace,
    indexSwamp,
    indexVote
]