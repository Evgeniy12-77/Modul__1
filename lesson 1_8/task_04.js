'use strict'

const game = () => {
   const botRAndom = Math.ceil(Math.random() * 100);


   const game_1 = () => {
      const playerRandom = +prompt('Введи число от 1 до 100');
   if(isNaN(playerRandom) || playerRandom > 100 || playerRandom < 1) {
      alert('Вы ввели некорректные данные');
      return game_1();
   };
   
      if(playerRandom > botRAndom) {
      alert ('Меньше');
      return game_1();
   };

   if(playerRandom < botRAndom) {
      alert ('Больше');
      return game_1();
   };

   if (playerRandom === botRAndom) {
      alert ('Правильно');
      return game();
   }; 
};
game_1();
};

game();
