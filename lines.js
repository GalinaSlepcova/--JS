function capitalizeFirstLetter(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
}
// console.log(capitalizeFirstLetter("привет"));

function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.log(reverseString("abc")); 

function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
// console.log(countVowels("Hello"));

function truncateText(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
// console.log(truncateText("Очень длинная строка", 10)); 

function removeSpaces(str) {
  return str.replace(/\s/g, '');
}
// console.log(removeSpaces("a b c")); 
