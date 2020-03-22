module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns_calc = Math.pow(2, disksNumber) - 1;
    let seconds_calc = turns_calc / (turnsSpeed / 3600);

    return {turns: turns_calc, seconds: seconds_calc};
}