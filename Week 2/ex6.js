var productID = 33;
var itemPrice = 0;
var qty = 2;
switch (productID) {
    case 1:
        itemPrice = 5;
        break;
    case 2:
        itemPrice = 6;
        break;
    case 3:
        itemPrice = 7;
        break;
    case 4:
        itemPrice = 8;
        break;
    case 5:
        itemPrice = 9;
        break;
    default:
        console.log("invalid");
        break;
}
console.log("Price of product: " + itemPrice);
console.log("Qty of product: " + qty);
console.log("Total Cost: " + (qty * itemPrice));
