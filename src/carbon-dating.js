const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {
  if (n == null || typeof n !== 'string') return false;
  n = parseFloat(n);
  if (isNaN(n) || n<=0 || n>15) return false;
  var k = 0.693 / HALF_LIFE_PERIOD;
  var result = Math.ceil(Math.log(MODERN_ACTIVITY / n) / k );
  return result;
};
