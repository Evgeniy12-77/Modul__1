

// eslint-disable-next-line strict
function generateArray(array) {
  if (array.reduce((sum, num) => sum + num, 0) >= 50) {
    return array;
  } else {
    const number = Math.floor(Math.random() * 11);
    array.push(number);
    return generateArray(array);
  }
}
const initialArray = [];
const resultArray = generateArray(initialArray);
console.log(resultArray);
