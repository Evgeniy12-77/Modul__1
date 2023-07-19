'use strict'

const addPrefix = (Array) => {
   const mrNames = [];
   for (let i = 0; i < Array.length; i++) {
      mrNames[i] = 'Mr ' + Array[i];
   };
   return mrNames;
}; 
const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log(addPrefix(names));

