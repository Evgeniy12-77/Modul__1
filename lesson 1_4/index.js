'use strict'


{
   const nameProduct = prompt ('Введите наименование товара');
   const countProduct = +prompt ('Введите количество товара');
   const categoryProduct = prompt ('Введите категорию товара');
   const count = +prompt('Введите цену товара');

   if (countProduct === + countProduct && count === + count) {
      console.log(`На складе ${countProduct} ${nameProduct} на общую сумму ${countProduct * count} белорусских рублей`);
   } else {
      prompt('Вы ввели некорректные данные')
   };
};