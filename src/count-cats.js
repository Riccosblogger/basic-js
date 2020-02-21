module.exports = function countCats(arr) {
  var number = [].concat(...arr).filter(e => e == "^^").length;
  return number;
};