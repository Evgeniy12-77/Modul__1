'use strict'
{
   const dochod_2 = +prompt('Введите ваш доход');
   if (dochod_2 < 15000 && dochod_2 > 0 ) {
      console.log (`Ваш налог составляет ${dochod_2 * 0.13}`);
   };
   if (dochod_2 >= 15000 && dochod_2 <= 50000 && dochod_2 > 0) {
      console.log (`Ваш налог составляет ${0.2 * (dochod_2 - 15000)}`);
   };
   if (dochod_2 > 0 && dochod_2 > 50000) {
      console.log (`Ваш налог составляет ${0.3 * (dochod_2 - 50000)}`);
   } else { console.log ('Вы ввели некорректные данные')};
};