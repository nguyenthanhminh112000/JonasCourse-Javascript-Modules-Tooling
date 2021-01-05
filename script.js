console.log('Importing Module');

// // // Named Import
// // import { addToCart, cost as price,cart } from "./shoppingCart.js";
// // cart.push('Tea');
// // console.log(price);
// // addToCart('Milk',5);

// // Named Import all in one
// import * as ShoppingCart from './shoppingCart.js'
// console.log(ShoppingCart.cart);


// Default Import
import ShoppingCart from './shoppingCart.js';
// ShoppingCart('Milk',5);
// ShoppingCart('Milk',5);
// ShoppingCart('Milk',5);
console.log(ShoppingCart);