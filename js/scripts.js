///////// Business Logic ////////
function Pizza(size) {
  this.toppings = [];
  this.size = size;
  this.total = 0;
}

Pizza.prototype.findTotal = function() {
  if (this.size === "12") {
    this.total = 15;
  }
  if (this.size === "16") {
    this.total = 18;
  }
  if (this.size === "20") {
    this.total = 22;
  };
  this.total += this.toppings.length * 1.5;
  return this.total;
};


Pizza.prototype.showPizza = function(i){
  var pizzaOutput = "";
  console.log(this.toppings);
  this.toppings.forEach(function(i){
    pizzaOutput += "<li>" + [i] + "</li>";
  })
  return pizzaOutput;
}

/////////User Interface//////////
$(function() {
  $("form.pizzaForm").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    var toppings = pizza.toppings;
    $(".pizzaOut").fadeIn();
    $("input:checkbox[name=pizzaForm]").each(function() {
      if ($(this).is(":checked")) {
        var top = ($(this).val());
        toppings.push(top);
        if (toppings.length === 0) {
          $("#topOut").text("no toppings")
        } else {
          $("#topOut").text(toppings.length + " toppings")
        }
      };
    });

    var topListOut = pizza.showPizza(pizza);
    console.log(topListOut);
    $("#topList").html(pizza.showPizza());
    console.log();
    pizza.size =  $("input:radio[name=pizzaSize]:checked").val();
    var pizSiz = pizza.size;
    $("span#sizeOut").text(pizSiz + "-inch pizza");
    var price = pizza.findTotal(pizza);
    $("span#priceOut").text("$" + price)
  });
});
