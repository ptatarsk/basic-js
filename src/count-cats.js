module.exports = function countCats(matrix) {
  let cats_num = 0;

  matrix = [].concat(...matrix);
  matrix.forEach((el) => {
      if (el === '^^')
        cats_num++;
    }
  );
  return cats_num;
};
