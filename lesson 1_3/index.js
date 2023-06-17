'use strict'
{
   const productName = 'ноутбук';
   const productCategory = 'компьютерная техника';
   const quantityOfGoods = 25;
   const productPrice = 1000;
   console.log (productName);
   console.log (quantityOfGoods * productPrice);
};

{
   const productName = 'Плед';
   const productCategory = 'Постельные принадлежности';
   const quantityOfGoods = 135;
   const productPrice = 70;
   console.log (productName);
   console.log (quantityOfGoods * productPrice);
};

{
   const nameProduct = prompt ('Введите наименование товара');
   const countProduct = +prompt ('Введите количество товара');
   const categ0ryProduct = prompt ('Введите категорию товара');
   const count = +prompt('Введите цену товара');
   console.log(`На складе ${countProduct} ${nameProduct} на общую сумму ${countProduct * count}`);
};