console.log(`Exporting Module`);
const cart=[];
const cost=10;

//Named Export
const addToCart=(product,quantity)=>{
    cart.push({product,quantity});
    console.log(cart);
}
export {cart,cost,addToCart};


// // Default Export
// const fnc=(product,quantity)=>{
//     cart.push({product,quantity});
//     console.log(cart);
// }
// export default fnc;

