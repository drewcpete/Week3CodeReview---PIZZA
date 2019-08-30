///////// Business Logic ////////
// function Customer(name, {Pizza})

//pizza constructor

function Pizza(toppings, size) {
  this.toppings = []
  this.size     = size;
}

//price prototype
Pizza.prototype.price = function () {
  if(size === "12-inch") {
    this.pizza.text("15")
  } else if (size === "16-inch") {
    this.pizza.text("18")
  } else if (size === "20-inch") {
    this.pizza.text("22")
  }
};
