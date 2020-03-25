function formatLine(line) {
  const columns = line.split(',');
  const surname = `${columns[0]}${' '.repeat(9 - columns[0].length)}`;
  const firstName = `${columns[1]}${' '.repeat(10 - columns[1].length)}`;
  const salary = columns[2];
  return `${surname}${firstName}${salary}`;
}

module.exports = formatLine;
