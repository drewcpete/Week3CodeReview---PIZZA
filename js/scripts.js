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

/////////User Interface//////////
$(function(){
  var pizza = new Pizza();
  // pizza.price(size),
  $("input:radio[value=12-inch]").click(function(){
    $("priceOut").text("small, 12-inch pizza")
  })
  $("input:radio[value=16-inch]").click(function() {
    $("priceOut").text("medium, 16-inch pizza")
  })
  $("input:radio[value=20-inch]").click(function() {
    $("priceOut").text("large, 20-inch pizza")
  })



});
