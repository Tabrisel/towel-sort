
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if ((matrix == undefined) || (matrix === 0) || (matrix == null)) {return []} else {
  let len = matrix.length;
  for (i = 0; i < len; i++) {
    for(j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
  result.push(matrix[i][j])} else {
    result.push(matrix[i][matrix[i].length - 1 - j])
  }
    }
  }
  return result}
}
