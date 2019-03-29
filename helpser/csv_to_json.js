const __new__line__ = '__new__line__';

module.exports = function csvToJSON(str) {
  str = str.replace(/(\r\n|\n|\r)/gm, __new__line__);
  str = str.replace(/"([^"]*)"/g, (match, pattern) => {
    pattern = pattern.replace(/,/g, '__coma__');
    return `${pattern}`;
  });
  const lines = str.split(__new__line__);
  const keys = lines.shift().split(',');
  return lines.filter(line => line.length).map(line => {
    return line.split(',').reduce((acc, el, index) => {
      acc[keys[index]] = el.replace(/^"|"$/gm, '').replace(/__coma__/g, ',');
      return acc;
    }, {});
  });
}
