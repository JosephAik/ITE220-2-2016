var customerName = "Joseph";
var price = 10;
var quantity = 2;
var TotlePrice = price * quantity;
var CustomerElement = document.getElementById("a");
CustomerElement.textContent = customerName;
var PriceElement = document.getElementById("b");
PriceElement.textContent = "$" + quantity * price;