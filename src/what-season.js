module.exports = function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring',
  'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  if (!date)
    return 'Unable to determine the time of year!';
  if (!date.getTime())
    throw new Error();
  return seasons[date.getMonth()];
};
