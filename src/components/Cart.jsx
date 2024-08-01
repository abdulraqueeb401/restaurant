import PropTypes from "prop-types";
function Cart({ dishes, cartIds, addCount, removeCount }) {
  console.log(dishes);
  let totalPrice = 0;
  const cartItems = dishes.reduce((acc, dish) => {
    const cartId = cartIds.filter((cartId) => cartId[dish.id]);
    const dishCount = cartId.length ? cartId[0][dish.id] : 0;
    totalPrice = totalPrice + (dishCount ? dish.price * dishCount : 0);
    return dishCount ? [...acc, { ...dish, ["count"]: dishCount }] : acc;
  }, []);
  console.log(cartItems);
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <p>
                {cartItem.title} ₹{cartItem.price * cartItem.count}
                <span>
                  <button onClick={() => removeCount(cartItem.id)}>-</button>
                  {cartItem.count}
                  <button onClick={() => addCount(cartItem.id)}>+</button>
                </span>
              </p>
            </div>
          );
        })}
        <hr />
        <p>Total = {totalPrice}</p>
      </div>
    </div>
  );
}

Cart.propTypes = {
  dishes: PropTypes.array.isRequired,
  cartIds: PropTypes.array.isRequired,
  addCount: PropTypes.func.isRequired,
  removeCount: PropTypes.func.isRequired,
};

export default Cart;
