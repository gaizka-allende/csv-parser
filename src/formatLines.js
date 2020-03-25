const formatLine = require('./formatLine');

function formatLines(lines) {
  return lines.map(formatLine);
}

module.exports = formatLines;
