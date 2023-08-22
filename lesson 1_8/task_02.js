'use strict';

function CreateRandom(length, from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);

  if (from > to || from < to) {
    return Array.from({length}, () => Math.floor(Math.random() * (from - to)) + to);
  }
}

console.log(CreateRandom(10, -5, 5));
console.log(CreateRandom(10, 100, 10));
