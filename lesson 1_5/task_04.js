'use strict'
const calculate = (cost, total, promo = null) => {

   const threeprocent = 0.03 * cost;
   const fiftehnprocent = 0.15 * (cost - 30000);
   const zehnprocent = 0.10 * cost;

if (total > 10 && cost < 30000) {
   const sum_0 = cost - threeprocent;
   sum_0;
   if (promo === 'METHED') {
      const drycehn = cost - threeprocent - zehnprocent;
      console.log (drycehn);
   } else if (promo === 'G3H2Z1' && sum_0 > 2000) {
      console.log (sum_0 - 500);
   } else {
      console.log (sum_0);
   };
} else if (total > 10 && cost > 30000) {
   const sum_1 = cost - threeprocent - fiftehnprocent;
   sum_1;
   if (promo === 'METHED') {
      const sum_21 = cost - threeprocent - fiftehnprocent - zehnprocent;
      console.log(sum_21);
   } else if(promo === 'G3H2Z1' && sum_1 > 2000) {
      console.log (sum_1 - 500);
   } else {
      console.log(sum_1)
   }
} else if (total < 10 && cost > 30000) {
   const sum_2 = cost - zehnprocent;
   sum_2;
   if (promo === 'METHED') {
      const sum_3 = cost - zehnprocent - fiftehnprocent;
      console.log (sum_3);
   } else if (promo === 'G3H2Z1' && sum_2 > 2000) {
      console.log(sum_2 - 500)
   } else {
      console.log(sum_2)
   };
} else if (total < 10 && cost < 30000) {
   cost;
   if (promo === 'METHED') {
      console.log (cost - zehnprocent);
   } else if (promo === 'G3H2Z1' && cost > 2000) {
      console.log (cost - 500)
   } else {
      console.log (cost);
   }; } else {
      console.log ('Вы ввели неверные данные')
   };
};
calculate(40000, 15, 'G3H2Z1');
