'use strict';

const calculateRandom = (numElements) => {
  const randomArray = [];
  for (let i = 0; i < numElements; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  return randomArray;
};

console.log(calculateRandom(12));
