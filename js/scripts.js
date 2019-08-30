///////// Business Logic ////////
// function Customer(name, {Pizza})

//pizza constructor

function Pizza(toppings, size) {
  this.toppings = []
  this.size     = size;
}

//price prototype
Pizza.prototype.price = function () {
  if(this.size === "12-inch") {
    this.price = "15"
  } else if (this.size === "16-inch") {
    this.price = "18"
  } else if (this.size === "20-inch") {
    this.price = "22"
  };
};

/////////User Interface//////////
$(function(){

  /////////New Pizza Object//////////
  var pizza = new Pizza();


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

// toppings
  $("form.pizzaForm").submit(function(event) {
    event.preventDefault();
    var toppings = []
    $("input:checkbox[name=pizzaForm]").each(function() {
      if ($(this).is(":checked")) {
        var top = ($(this).val());
        toppings.push(top);
      }
    console.log(toppings);
    $("#topOut").text(toppings.length + " toppings");
    });
  // });


// size
  // $("form.pizzaForm").submit(function(event){
  //   event.preventDefault();
    pizza.size = $("input:radio[name=pizzaSize]:checked").val();
    var pizSiz = pizza.size;
    // console.log(pizSiz);
    $("#sizeOut").text(pizSiz + " pizza");
  // });



// price
  // $("form.pizzaForm").submit(function(event) {
  //   event.preventDefault();
    var price = pizza.price();
    console.log("the price should be = " + price);
    $("#priceOut").text("$" + price)

  });
});
