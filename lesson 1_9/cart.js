'use strict'

const cart = {
   items: [],
   totalPrice: 0,
   count: 0,

   getTotalPrice() {
   return this.totalPrice;
   },

   calculateItemPrice() {
   let totalPrice = 0;
   for (const item of this.items) {
       totalPrice += item.price * item.quantity;
   }
   this.totalPrice = totalPrice;
   },

   increaseCount(num) {
   this.count += num;
   },

   add(name, price, quantity = 1) {
   const newItem = {
      name: name,
      price: price,
      quantity: quantity,
   };
   this.items.push(newItem);
   this.increaseCount(quantity);
   this.calculateItemPrice();
   },

   clear() {
   this.items = [];
   this.totalPrice = 0;
   this.count = 0;
   },

   print() {
   console.log(JSON.stringify(this.items));
   console.log(`Total Price: ${this.totalPrice}`);
   },
};

cart.add("Тетрадь", 5, 2);
cart.add("Ручка", 3);
cart.add("Карандаш", 2, 3);

console.log(cart.getTotalPrice());
cart.increaseCount(5);
cart.print();
cart.clear();
console.log(cart);