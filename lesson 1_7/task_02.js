'use strict'

const getAverageValue = () => {
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
let sum = Math.floor(allСashbox.reduce(function (x, y) {
   return x + y;
}, 0) / allСashbox.length);
return sum;
};
console.log(getAverageValue());