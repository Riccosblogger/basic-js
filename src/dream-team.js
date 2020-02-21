module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  var new_arr = arr.filter(el => typeof el == 'string').map(el => el.replace(/\s/g, "").slice(0,1).toUpperCase()).sort().join('');
  return new_arr;
};