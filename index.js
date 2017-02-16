function compareKeys(x, y) {

  for (var k in x) {
    if (y[k] === undefined) return false;

    if (!(x[k] instanceof Array) && (typeof x[k] === 'object')) {
      return compareKeys(x[k], y[k]);
    }
  }

  return true;
}

module.exports = function(a, b) {
  return compareKeys(a, b) && compareKeys(b, a);
}
