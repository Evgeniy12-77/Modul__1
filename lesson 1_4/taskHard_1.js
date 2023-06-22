'use strict'

{
   const dochod_1 = +prompt ('Введите сумму вашего дохода');
   if (dochod_1 < 15000 && dochod_1 > 0) {
      console.log (`Ваш налог составляет ${dochod_1 * 0.13}`);
   };
   if (dochod_1 >= 15000 && dochod_1 <= 50000 && dochod_1 > 0) {
      console.log (`Ваш налог составляет ${dochod_1 * 0.2}`);
   };
   if (dochod_1 > 50000) {
      console.log (`Ваш налог составляет ${dochod_1 * 0.3}`);
   };
};