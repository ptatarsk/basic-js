module.exports = function createDreamTeam(members) {
  let team = [];

  if (!Array.isArray(members))
    return false;
  members.forEach((el) => {
    if (typeof el === 'string')
      team.push(el.trim()[0].toUpperCase());
  });
  return team.sort().join('');
};