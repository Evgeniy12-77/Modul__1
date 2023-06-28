'use strict'

const converter = euro => {
   let a = euro;
   let b = a * 64 * 1.2;
   return b;
};
console.log(`${converter(10)} рос. р.`);