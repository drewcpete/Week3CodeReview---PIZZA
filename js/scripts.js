///////// Business Logic ////////
// function Customer(name, {Pizza})

//pizza constructor

function Pizza(toppings, size) {
  this.toppings = []
  this.size     = size;
}

//price prototype
Pizza.prototype.total = function(total) {

  if(this.size == "12") {
    this.total = "15"
  } else if (this.size == "16") {
    this.total = "18"
  } else if (this.size == "20") {
    this.total = "22"
  };
};

/////////User Interface//////////
$(function(){

  /////////New Pizza Object//////////
  var pizza = new Pizza();

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

// size
    pizza.size = $("input:radio[name=pizzaSize]:checked").val();
    var pizSiz = pizza.size;
    console.log(typeof(pizSiz));
    $("#sizeOut").text(pizSiz + "-inch pizza");

    // price
    var price = pizza.total(pizSiz);
    console.log(typeof(price));
    console.log("the price should be = " + price);
    $("#priceOut").text("$" + price)
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
