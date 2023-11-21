// use local storage to manage cart data
const AddToDb = (id) => {
  let shoppingCart = GetShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const RemoveFromDb = (id) => {
  const shoppingCart = GetShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const GetShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const DeleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { AddToDb, RemoveFromDb, GetShoppingCart, DeleteShoppingCart };
