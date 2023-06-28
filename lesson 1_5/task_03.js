'use strict'

function reverse (str) {
   if (!str) return str; 
   return str.split('').reverse().join('');
};

console.log (reverse('Евгений'));
