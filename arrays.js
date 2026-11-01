function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([]));  

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
// console.log(filterEvenNumbers([1, 2, 3, 4])); 

function findMax(arr) {
  return Math.max(...arr);
}
// console.log(findMax([3, 7, 1, 9, 4])); 

function flattenArray(arr) {
  return arr.reduce((acc, item) => acc.concat(item), []);
}
// console.log(flattenArray([[1, 2], [3, [4]]])); 

function uniqueValues(arr) {
  return [...new Set(arr)];
}
// console.log(uniqueValues([1, 2, 2, 3, 1])); 
