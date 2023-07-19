'use strict'

const allСashbox = [
   [12, 4500], 
   [7, 3210], 
   [4, 650], 
   [3, 1250], 
   [9, 7830], 
   [1, 990], 
   [6, 13900], 
   [1, 370]
];
const calc = () => {
const sum_0 = allСashbox.reduce((sum, pair) => sum + pair[0], 0);
const sum_1 = allСashbox.reduce((sum, pair) => sum + pair[1], 0);
const check = Math.floor(sum_1 / sum_0);
return check;
};
console.log(calc());
