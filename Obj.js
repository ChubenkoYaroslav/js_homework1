//ДЗ 1
let obj = {
  property1: "Have",
  property2: "a good",
  property3: "day",

  getInfo: function () {
    for (let key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
  },
};

obj.getInfo();

obj.newProperty = "and night";

obj.getInfo(); 

//ДЗ 2
let services = {
  стрижка: 60,
  гоління: 80,
  "Миття голови": 100,
};


services["Розбити скло"] = 200;

services.price = function () {
  let totalPrice = 0;
  for (let key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      totalPrice += this[key];
    }
  }
  return totalPrice;
};

services.minPrice = function () {
  let minPrice = Infinity;
  for (let key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      minPrice = Math.min(minPrice, this[key]);
    }
  }
  return minPrice;
};

services.maxPrice = function () {
  let maxPrice = -Infinity;
  for (let key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      maxPrice = Math.max(maxPrice, this[key]);
    }
  }
  return maxPrice;
};

console.log("Загальна вартість послуг:", services.price());
console.log("Мінімальна вартість:", services.minPrice());
console.log("Максимальна вартість:", services.maxPrice());
