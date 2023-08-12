// Создаем объект cart - корзина
const cart = {
   items: [], // массив товаров
   count: 0, // количество товаров
   // Геттер для получения общей стоимости товаров
   get totalPrice() {
return this.calculateItemPrice();
   },
 
   // Пересчитывает стоимость всей корзины и возвращает сумму
   calculateItemPrice() { let totalPrice = 0;
    
     for (const item of this.items) {
       totalPrice += item.price * item.quantity;
     }
     return totalPrice;
   },
 
   // Увеличить количество товаров
   increaseCount(amount) {
     this.count += amount;
   },
 
   // Добавить товар
   add(name, price, quantity = 1) {
     const newItem = {
       name,
       price,
       quantity,
     };
     this.items.push(newItem);
     this.increaseCount(quantity);
   },
 
   // Очистить корзину
   clear() {
     this.items = [];
     this.count = 0;
   },
 
   // Распечатать корзину
   print() {
     console.log(JSON.stringify(this.items));
     console.log('Total Price:', this.totalPrice);
   },
 };
 
 // Пример использования
 cart.add('Товар 1', 10, 2);
 cart.add('Товар 2', 5, 3);
 cart.add('Товар 3', 8);
 // Меняем значение totalPrice
 cart.totalPrice = 10;
 cart.print();