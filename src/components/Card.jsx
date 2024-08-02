import PropTypes from "prop-types";
import NonVegIcon from "../assets/nonveg.svg";
import VegIcon from "../assets/veg.svg";
import StarRating from "./StarRating";
import AddButton from "./AddButton";
import { useContext } from "react";
import { CartIdContext } from "./CartIdContext";
import { CardVariantContext } from "./CardVariantContext";

const Card = ({ dish, onCardIdAddition, onCardIdRemoval }) => {
  const { id, imageurl, title, rating, price, description, votes, nonveg } =
    dish;
  const cartIds = useContext(CartIdContext);
  const cardVariant = useContext(CardVariantContext);
  const cartItem = cartIds.filter((cartId) => cartId[id]);
  const count = cartItem.length ? cartItem[0][id] : 0;

  return cardVariant === "MENU_CARD" ? (
    <div className={`card-container`}>
      <div className="relative justify-self-end">
        {imageurl && (
          <img src={imageurl} alt={title} className="rounded-lg dish" />
        )}
        <img
          src={nonveg ? NonVegIcon : VegIcon}
          className={`${
            imageurl ? "absolute top-2 right-2" : "pt-1.5"
          } bg-white nv-icon`}
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <h3 className="capitalize font-semibold">{title}</h3>
        {rating && (
          <div className="flex flex-row items-center gap-2">
            <StarRating id={id} rating={rating} />
            <p className="font-light text-sm">{votes} votes</p>
          </div>
        )}
        <p>₹{price}</p>
        <p>{description}</p>
      </div>
      <AddButton
        id={id}
        count={count || 0}
        addItemToCart={onCardIdAddition}
        removeItemFromCart={onCardIdRemoval}
      />
    </div>
  ) : (
    <div className={"flex items-start gap-2"}>
      <img
        src={nonveg ? NonVegIcon : VegIcon}
        className={"pt-1.5 bg-white nv-icon"}
        alt="icon"
      />
      <div className="flex flex-col gap-1 justify-center w-3/5">
        <h3 className="capitalize font-semibold">{title}</h3>
        <p className="text-sm">₹{price}</p>
        <p className="text-gray-600 text-sm font-light">{description}</p>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <AddButton
          id={id}
          count={count || 0}
          addItemToCart={onCardIdAddition}
          removeItemFromCart={onCardIdRemoval}
        />
        <span className="text-sm">₹{price * count}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  dish: PropTypes.object.isRequired,
  onCardIdAddition: PropTypes.func.isRequired,
  onCardIdRemoval: PropTypes.func.isRequired,
};

export default Card;
