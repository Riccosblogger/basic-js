module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var result = {};
    result.turns = Math.pow(2, disksNumber)-1; // (2 в степени n) - 1
    result.seconds = result.turns / (turnsSpeed / 3600);
return result;
}