/*
The cart variable stores the prices for 3 products selected from an online store.
The salesTax variable stores the local sales tax rate.
*/

let cart = [37.49, 8.99, 27.95];
let salesTax = 0.0875;
console.log(cart);

/*
Complete the following:

1. Create a cartWithTax variable. Write code that calculates the sales tax for
each item in the cart array, adds that to the original price of the item, and
stores the result in the cartWithTax array. (Hint: Use the .map() array method.)
Log the cartWithTax variable to the console.
*/

let cartWithTax = cart.map(function(element) {
    return (element + (element * salesTax));
    // or to round to the nearest cent:
    //return Math.round((element + (element * salesTax)) * 100)/100;
});
console.log(cartWithTax);

/*
2. Create a cartTotal variable. Write code that uses a loop to total the values
in the cartWithTax array, and assign the total as the value of the cartTotal
variable. Log the cartTotal variable to the console.
*/

let cartTotal = 0;
for (let i = 0; i < cartWithTax.length; i++) {
    cartTotal += cartWithTax[i];
}
console.log(cartTotal);
