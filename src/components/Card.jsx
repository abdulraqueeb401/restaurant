import PropTypes from "prop-types";
import NonVegIcon from "../assets/nonveg.svg";
import VegIcon from "../assets/veg.svg";
import StarRating from "./StarRating";

const Card = ({ dish, id }) => {
  const { imageurl, title, rating, price, description, votes, nonveg } = dish;
  return (
    <div className={`flex flex-row items-start gap-5`}>
      <div className="relative">
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
    </div>
  );
};

Card.propTypes = {
  dish: PropTypes.object.isRequired,
};

Card.propTypes = {
  id: PropTypes.string,
};

export default Card;
