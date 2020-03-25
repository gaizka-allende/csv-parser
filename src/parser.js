const fs = require('fs');

const readLines = require('./readLines');
const formatLines = require('./formatLines');
const constants = require('./constants');

function parser(path) {

  let csv;
  try {
    csv = fs.readFileSync(path);
  } catch (err) {
    //console.log(err);
    return constants.errors.filePathNotFound;
  }

  const lines = readLines(csv.toString());

  const formattedLines = formatLines(lines);

  return formattedLines.reduce(
    (acc, curr) => {
      return `${acc}\n${curr}`;
    },
    constants.header,
  );
}

module.exports = parser;
