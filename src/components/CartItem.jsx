import Card from "./Card";

function CartItem({ dish, onCardIdAddition, onCardIdRemoval }) {
  const { count, ...dishData } = dish;
  return (
    <Card
      dish={dishData}
      onCardIdAddition={onCardIdAddition}
      onCardIdRemoval={onCardIdRemoval}
    />
  );
}

export default CartItem;
