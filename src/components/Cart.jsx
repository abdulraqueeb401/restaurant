import PropTypes from "prop-types";
import Card from "./Card";

function Cart({ dishes, cartIds, onCardIdAddition, onCardIdRemoval }) {
  console.log(dishes);
  let totalPrice = 0;
  const cartItems = cartIds.map((cartId) => {
    const [dish] = dishes.filter((dish) => cartId[dish.id]);
    const dishCount = cartId[dish.id];
    totalPrice += dishCount * dish.price;
    return { ...dish, count: dishCount };
  });
  // console.log(cartItems);
  return (
    <div className="cart">
      <h2 className="cart-title">Order</h2>
      <div className="flex flex-col gap-2">
        {cartItems.map((cartItem) => {
          // eslint-disable-next-line no-unused-vars
          const { _, ...dishData } = cartItem;
          return (
            <Card
              key={cartItem.id}
              dish={dishData}
              onCardIdAddition={onCardIdAddition}
              onCardIdRemoval={onCardIdRemoval}
            />
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
  onCardIdAddition: PropTypes.func.isRequired,
  onCardIdRemoval: PropTypes.func.isRequired,
};

export default Cart;
