///////// Business Logic ////////
// function Customer(name, {Pizza})

//pizza constructor

function Pizza(toppings, size, total) {
  this.toppings = []
  this.size = size;
  this.total = 0
}

//price prototype
Pizza.prototype.findTotal = function() {
  var price = 0
  console.log("this size" + this.size);

  if (this.size === "12") {
    this.total = 15
  }
  console.log("total " + this.total);
  if (this.size === "16") {
    this.total = 18
  }
  if (this.size === "20") {
    this.total = 22
  };
  this.total += this.toppings.length * 1.5
  console.log(this.total);
  return this.total;
};

Pizza.prototype.double = function(input) {
  return input + input;
}

Pizza.prototype.makeUL = function() {
  for (var i = 0; i < this.toppings; i++) {
    var topul = document.createElement("ul");
    var top = document.createElement("li");
    top.appendChild.document.createTextNode(toppings[i]);
    topul.appendChild(top);
    $("#topList").html(tupul);
    return topul;
  }
};

/////////User Interface//////////
$(function() {


  // toppings
  $("form.pizzaForm").submit(function(event) {
    event.preventDefault();
    /////////New Pizza Object//////////
    var pizza = new Pizza();
    $(".pizzaOut").fadeIn();

    var toppings = pizza.toppings;
    $("input:checkbox[name=pizzaForm]").each(function() {
      if ($(this).is(":checked")) {
        var top = ($(this).val());
        toppings.push(top);
        if (toppings.length === 0) {
          $("#topOut").text("no toppings")
        } else {
          $("#topOut").text(toppings.length + " toppings")
          console.log(toppings);
        }
      };
    });
    pizza.makeUL(toppings);

  // size
  pizza.size = $("input:radio[name=pizzaSize]:checked").val();
  var pizSiz = pizza.size;
  console.log(typeof(pizSiz));
  $("span#sizeOut").text(pizSiz + "-inch pizza");

  // price
  var price = pizza.findTotal();
  console.log(price);
  console.log("the price should be = " + price);
  $("span#priceOut").text("$" + price)
  });
});









// $("input:radio[value=12-inch]").submit(function(event){
//   $("priceOut").text("small, 12-inch pizza");
// });
// $("input:radio[value=16-inch]").submit(function() {
//   $("priceOut").text("medium, 16-inch pizza");
// });
// $("input:radio[value=20-inch]").submit(function() {
//   $("priceOut").text("large, 20-inch pizza");
// });
