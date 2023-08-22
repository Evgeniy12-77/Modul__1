'use strict'
const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  calculateItemPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price * item.quantity;
    }
    totalPrice -= (totalPrice * (this.discount / 100));
    this.totalPrice = totalPrice;
  },

  increaseCount(num) {
    this.count += num;
  },

  add(name, price, quantity = 1) {
    const newItem = {
      name,
      price,
      quantity,
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

  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Total Price: ${this.totalPrice}`);
  },
};

cart.add('Тетрадь', 5, 2);
cart.add('Ручка', 3);
cart.add('Карандаш', 2, 3);

console.log(cart.getTotalPrice());
cart.increaseCount(5);
cart.print();

cart.setDiscount('METHED');
console.log(cart.discount); // Output: 15

cart.calculateItemPrice();
cart.print();

cart.setDiscount('NEWYEAR');
console.log(cart.discount); // Output: 36 (15 + 21)

cart.calculateItemPrice();
cart.print();

cart.clear();
console.log(cart);
