'use strict';

function Phone(brand, model, price, color, releaseYear, specsUrl) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
  this.releaseYear = releaseYear;
  this.specsUrl = specsUrl;
};

Phone.prototype.printInfo = function() {
  console.log(`The phone brand is ${this.brand}, color is ${this.color} and the price is ${this.price}. Phone was released in ${this.releaseYear}. \nFor specs go to: ${this.specsUrl}.`);
};

Phone.prototype.printTableInfo = function() {
  console.table(this);
};

const phones = {};

phones['iPhone6S'] = new Phone('Apple', 'iPhoneS6', 2250, 'silver', 2015, 'https://www.gsmarena.com/apple_iphone_6s_plus-7243.php');

phones['GalaxyS6'] = new Phone('Samsung', 'GalaxyS6', 2000, 'gold', 2015, 'https://www.gsmarena.com/samsung_galaxy_s6-6849.php');

phones['OnePlus-One'] = new Phone('OnePlus', 'One', null, 'black', 2014, 'https://www.gsmarena.com/oneplus_one-6327.php');


for (let key in phones) {
  phones[key].printInfo();
  phones[key].printTableInfo();
}
console.table(phones);