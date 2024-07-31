import PropTypes from "prop-types";
import Card from "./Card";

function MenuList({ menuitem, onCardIdAddition, onCardIdRemoval }) {
  const { name, dishes } = menuitem;
  return (
    <section className="flex flex-col gap-y-5 col-span-2">
      <h2 className="menu-heading">{name}</h2>
      {dishes.map((dish) => {
        return (
          <Card
            key={dish.id}
            onCardIdAddition={onCardIdAddition}
            onCardIdRemoval={onCardIdRemoval}
            dish={dish}
          />
        );
      })}
    </section>
  );
}

MenuList.propTypes = {
  menuitem: PropTypes.object.isRequired,
  onCardIdAddition: PropTypes.func.isRequired,
  onCardIdRemoval: PropTypes.func.isRequired,
};

export default MenuList;
