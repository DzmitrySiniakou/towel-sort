
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {return []}
  let arr = [];
  matrix.forEach((element, index) => {myFun(element, index)});
  function myFun(element, index){
    if (index % 2 == 0){arr = arr.concat(element)} 
    if (index % 2 !== 0){arr = arr.concat(element.reverse())};
  }
  return arr;
}
