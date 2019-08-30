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

  /////////New Pizza Object//////////
  var pizza = new Pizza();

  /////////topping vars//////////
  // var pep = {topping: "peperoni"}
  // var pin = {topping: "pineapple"}
  // var oni = {topping: "onion"}
  // var oli = {topping: "black olives"}
  // var bel = {topping: "bell peppers"}
  // var ban = {topping: "banana peppers"}
  // var fig = {topping: "figs"}
  // var bal = {topping: "balsamic reduction"}
  // var pro = {topping: "prosciutto"}
  // var goa = {topping: "goat cheese"}

  // pizza.price(size),

  // $("input:radio[value=12-inch]").submit(function(event){
  //   $("priceOut").text("small, 12-inch pizza");
  // });
  // $("input:radio[value=16-inch]").submit(function() {
  //   $("priceOut").text("medium, 16-inch pizza");
  // });
  // $("input:radio[value=20-inch]").submit(function() {
  //   $("priceOut").text("large, 20-inch pizza");
  // });

  // toppings input
  $("form.pizzaForm").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=pizzaForm]:checked").each(function(){
      pizza.toppings = $(this).val();
      console.log(pizza.toppings);
      var toppings = pizza.toppings
      // toppings = toppings.join(", ");
      $("#topOut").append(toppings + ", ");
    })
  })


});
