'use strict'

const items = document.querySelector('.items');
const itemOne = document.querySelector('.item_one');
const itemTWo = document.querySelector('.item_two');
const itemTRhee = document.querySelector('.item_three');
const itemSix = document.querySelector('.item_six');
const sixList = itemSix.querySelectorAll('li');
const twoList = itemTWo.querySelectorAll('li');
const itemFour = document.querySelector('.item_four');
const propsFive = itemTRhee.querySelector('ol');
const itemFive = document.querySelector('.item_five');

const fourList = itemFour.querySelectorAll('li');
const propsThree = itemFive.querySelector('ol');


const body = document.querySelector('body');
const ads = document.querySelector('.ads');

ads.remove(body);


items.prepend(itemOne, itemTWo, itemTRhee);
twoList[8].append(sixList[8], sixList[9]);
fourList[4].append(twoList[3]);
itemFive.append(propsFive);
itemTRhee.append(propsThree);


