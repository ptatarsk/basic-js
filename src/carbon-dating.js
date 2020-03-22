const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sample_activity = parseFloat(sampleActivity);
  const rate_constant = 0.693 / HALF_LIFE_PERIOD;

  if (!sample_activity || (typeof sampleActivity !== 'string') ||
  (sample_activity <= 0) || sample_activity > MODERN_ACTIVITY)
    return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sample_activity) / rate_constant);
};
