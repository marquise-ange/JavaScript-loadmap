let stock = 200;
let soldItems = 50;

//Check if stock is greater than sold items.
if (stock > soldItems) {
    console.log("Stock is greater than sold items.");
} else {
    console.log("Stock is not greater than sold items.");
}

//Check if stock is 0.
if (stock === 0) {
    console.log("Stock is 0.");
} else {
    console.log("Stock is not 0.");
}

//Check if sold items are NOT more than stock.
if (!(soldItems > stock)) {
    console.log("Sold items are not more than stock.");
} else {
    console.log("Sold items are more than stock.");
}
