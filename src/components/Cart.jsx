import PropTypes from "prop-types";

function Cart({ dishes, cartIds, addCount, removeCount }) {
  console.log(dishes);
  let totalPrice = 0;
  const cartItems = cartIds.map((cartId) => {
    const [dish] = dishes.filter((dish) => cartId[dish.id]);
    const dishCount = cartId[dish.id];
    totalPrice += dishCount * dish.price;
    return { ...dish, count: dishCount };
  });
  console.log(cartItems);
  return (
    <div className="cart">
      <h2 className="cart-title">Order</h2>
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
