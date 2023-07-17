'use strict'
{
let num1 = +prompt('Введите число первое:');
let num2 = +prompt('Введите число второе:');
// Функция для вычисления НОД
function findGCD(a, b) {
if (b === 0) {
   return a;
} else {
   return findGCD(b, a % b);
};
};
// Вызов функции и вывод результата
let gcd = findGCD(num1, num2);

console.log('Наибольший общий делитель: ' + gcd);
};

