'use strict';

function CreateRandom(length, from, to, str) {
  from = Math.ceil(from);
  to = Math.floor(to);
  if (from > to || from < to) {
    return Array.from({length}, () => Math.floor(Math.random() * (from - to)) + to)
      .filter(num => {
        if (str === 'even') {
          return num % 2 === 0;
        } else if (str === 'odd') {
          return !(num % 2 === 0);
        }
      });
  }
}
console.log(CreateRandom(10, 10, 5, 'even'));
console.log(CreateRandom(10, 10, 5, 'odd'));
