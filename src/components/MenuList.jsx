import PropTypes from "prop-types";
import Card from "./components/Card";

function MenuList(props) {
  const { name, dishes } = props.menuitem;
  return (
    <section className="flex flex-col gap-y-5 col-span-2">
      <h2 className="menu-heading">{name}</h2>
      {dishes.map((dish, index) => {
        return <Card key={index} dish={dish} />;
      })}
    </section>
  );
}

MenuList.propTypes = {
  menuitem: PropTypes.object.isRequired,
};

export default MenuList;
