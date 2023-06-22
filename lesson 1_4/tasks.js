'use strict'

{
   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
   };
   const random = getRandomInt(2);
   if (random === 0) {
      console.log('Дождя нет'); 
   } else { console.log ('Пошел дождь. Возьмите зонт') };

};

{ 
   const mathematik = +prompt ('Введите количество баллов по математике');
   const russish = +prompt ('Введите количество баллов по русскому языку');
   const informathik = +prompt('Введите количество баллов по информатике');
   const sumBall = mathematik + russish + informathik;
   if (sumBall >= 265) {
      alert ('Поздравляю. Вы поступли на бюджет');
   } else { alert ('Сожалеем. Вы не поступили на бюджет') };
};

{
  const bank = +prompt ('Какую сумму вы хотите снять?')
  if (bank % 100 === 0) {
   console.log ('Баанкомат выдает запрашиваемую сумму')
  } else {console.log ('Повторите операцию, в банкомате имеются купюры только по 100 руб.')}
};
