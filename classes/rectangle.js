class Rectangle {
  #squere;
  #perimeter;

  #sideOne;
  #sideSecond;

  constructor(_sideOne, _sideSecond) {
    this.#sideOne = _sideOne;
    this.#sideSecond = _sideSecond;
  }

  set setSquere(_squre) {
    this.#squere = _squre;
  }

  set setPerimeter(_perimeter) {
    this.#perimeter = _perimeter;
  }

  get getSquere() {
    return this.#squere;
  }

  get getPerimeter() {
    return this.#perimeter;
  }

  calculateSquere() {
    this.#squere = this.#sideOne * this.#sideSecond;
  }

  calculatePerimeter() {
    this.#perimeter = (this.#sideOne + this.#sideSecond) * 2;
  }
}

const rectangle = new Rectangle(5, 10);
rectangle.calculatePerimeter();
rectangle.calculateSquere();

console.log(rectangle.getSquere);
console.log(rectangle.getPerimeter);

rectangle.setPerimeter = 10;
rectangle.setSquere = 100;

console.log(rectangle.getSquere);
console.log(rectangle.getPerimeter);
