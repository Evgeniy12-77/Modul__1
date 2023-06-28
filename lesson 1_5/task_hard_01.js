'use strict'

const nod = (a,b) => {
   const a = +prompt('Введите большее число');
   const b = +prompt ('Введите меньшее число');
   if (a > b && a % b === 0) {
      console.log (`НОД = ${b}`);
   } else if (a > b && a % b !== 0) {
      const n = a % b;
      if (a % n === 0 && b % n === 0) {
         console.log (n);
      }
      
   }

}