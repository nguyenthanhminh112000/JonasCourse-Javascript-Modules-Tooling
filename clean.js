const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allowedProduct = {
  lisbon: 5,
  others: 7,
};


const checkAllowedProducts = function (cart,numberAllowed,city) {
  if(!cart.length) return [];
  let allowed=city==='lisbon'?numberAllowed.lisbon:numberAllowed.others;
    // for (let item of shoppingCart) {
    //   if (item.quantity > allowed) 
    //   item.quantity = allowed;
    // }
  // shoppingCart.forEach((value)=>{
  //   value.quantity=value.quantity>allowed?allowed:value.quantity;
  // })
  const newShoppingCart=shoppingCart.map((value)=>{
    const {product,quantity}=value;
    return {
      product,
      quantity:quantity>allowed?allowed:quantity
    }
  });
  return newShoppingCart;
};
const newShoppingCart=checkAllowedProducts(shoppingCart,allowedProduct,'lisbon');
console.log(newShoppingCart);

const createDescriptionOrder = function (cart) {
  const [firstItem] = cart;
  // const firstItemProduct = firstItem.product;
  // const firstItemQuantity = firstItem.quantity;
  const {product:firstItemProduct,quantity:firstItemQuantity}=firstItem;
  // if (shoppingCart.length > 1) {
  //   `Order with + ${firstItemQuantity} ${firstItemProduct} , etc...`
  // } else {
  //   descriptionOrder = 'Order with ' + q + ' ' + p + '.';
  // }
  // return cart.length>1
  // ?`Order with + ${firstItemQuantity} ${firstItemProduct} , etc...`
  // :`Order with ${firstItemQuantity} ${firstItemProduct}.`;
  return `Order with ${firstItemQuantity} ${firstItemProduct} ${cart.length>1?', etc':'.'}`
};
const descriptionOrder = createDescriptionOrder(newShoppingCart);
console.log(descriptionOrder);

