'use strict'
const maxNumber = (x,y) => {
   if (x > y) {
      console.log(x);
   } else if (x < y) {
      console.log(y);
   } else if (x === y) {
      console.log (x);
   } else {
      console.log('Вы ввели неверные данные')
   };
};
maxNumber(10, 18);