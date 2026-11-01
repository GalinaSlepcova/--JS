function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// printNumbers(5); 

function calculateFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
//console.log(calculateFactorial(5)); 
//console.log(calculateFactorial(0)); 

function generateMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
//generateMultiplicationTable(4);

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; 
    num = Math.floor(num / 10); 
  }
  return sum;
}
//console.log(sumOfDigits(123));
//console.log(sumOfDigits(9999)); 
//console.log(sumOfDigits(0));  

function repeatString(str, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}
//console.log(repeatString("ab", 3));
