/* eslint-disable max-len */
'use strict';

const car = {
  car: 'mini',
  model: 'cooper',
  price: 30000,
};

Object.defineProperty(car, 'fullName', {
  get() {
    return `${this.car} ${this.model}`; // возвращает значение
  },

  set(val) {
    this.comment = val;
  },

});
console.log(car.fullName);
car.fullName = 'Тачка огонь';

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

const actors = new Map();
actors.set(); // добавить в коллекцию
actors.get(); // получить значение ключа
actors.keys(); // получаем только ключи
actors.values(); // Получаем значения
([...actors.keys()]); // получаем массив
actors.size; // количество эл-в в коллекции.

const heroes = new Set();
heroes.add(); // добавить в коллекцию
// отлличие в том что в  set не хранятся повторяющиеся элементы, каждый элемент уникален.
const arr = [1, 10, 10, 7, 9, 9, 0, 0, 3, 4, 4];
console.log(Array.from(new Set(arr)));


// configurable: true, разрешена/ запрещена конифгурация свойства: удалять нельзя, менять можно.
// enumerable: true, // запрещает - разрешает итерировать.
// writable: true, // запрещает перезаписывать значение.
