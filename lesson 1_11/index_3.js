'use strict'
const rectangle = {
  width: 5, // значение ширины по умолчанию
  height: 5, // значение высоты по умолчанию
  setWidth(width) {
    if (typeof width === 'number') {
      this.width = width;
    } else {
      console.error('Ширина должна быть числом');
    }
  },
  setHeight(height) {
    if (typeof height === 'number') {
      this.height = height;
    } else {
      console.error('Высота должна быть числом');
    }
  },
  getPerimeter() {
    return `${this.width + this.height}см`;
  },
  getArea() {
    return `${this.width * this.height}см²`;
  },
};

// Пример использования
console.log(rectangle.width); // 5
console.log(rectangle.height); // 5
console.log(rectangle.getPerimeter()); // "10см"
console.log(rectangle.getArea()); // "25см²"

rectangle.setWidth(8);
rectangle.setHeight(6);
console.log(rectangle.width); // 8
console.log(rectangle.height); // 6
console.log(rectangle.getPerimeter()); // "14см"
console.log(rectangle.getArea()); // "48см²"
