function Phone(brand, ram, battery, price, color) {
  this.brand = brand;
  this.ram = ram;
  this.battery = battery;
  this.price = price;
  this.color = color || "black";
}
Phone.prototype.printInfo = function() {
  console.log(
    "The phone brand is " +
      this.brand +
      ", RAM is " +
      this.ram +
      ", battery capacity - " +
      this.battery +
      ", color is " +
      this.color +
      " and the price is " +
      this.price +
      "."
  );
};
Phone.prototype.index = function() {
    var value = 0;
    value = Math.round(this.battery / this.price);
    console.log("Factor price vs battery capacity is " +value);
}
var Redmi4X = new Phone("Xiaomi", "3GB", 4100, 650, "White");
var Samsung8 = new Phone("Samsung", "4GB", 3500, 3500);
var Nokia4 = new Phone("Nokia", "2GB", 2900, 1000, "Silver");

Redmi4X.printInfo();
Redmi4X.index();
Samsung8.printInfo();
Samsung8.index();
