'use strict'
Object.assign(); // слияние обьектов поверхностное.
const obj4 = {...obj1, g: 'hi', ...obj2}; //клонирование обьекта с помощью спред оператора.
//деструктуризация обьектов:
const { //пишутся ключи которые нужно достать
} = hero
//оператор опциональной последовательности (item?.cars?.)
//оператор нулевого слияния ?? null

// глубокое копирование
const hero = {
   a: 4,
   b: 7,
   str: 'Привет',
}
const heroStr = JSON.stringify(hero);
const heroObj = JSON.parse(heroStr);








