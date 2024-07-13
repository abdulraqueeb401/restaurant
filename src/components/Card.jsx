import PropTypes from "prop-types";
import NonVegIcon from "../assets/nonveg.svg";
import VegIcon from "../assets/veg.svg";

const Star = () => {
  // TODO: Star rating: https://ishadeed.com/article/star-rating-svg/

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFD700"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000000"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

const Card = ({ dish }) => {
  const { imageurl, title, rating, price, description, votes, nonveg } = dish;
  return (
    <div
      className={`flex flex-row items-start ${imageurl ? "gap-10" : "gap-5"}`}
    >
      <div className="relative">
        {imageurl && (
          <img src={imageurl} alt={title} className="rounded-lg dish" />
        )}
        <img
          src={nonveg ? NonVegIcon : VegIcon}
          className={`${
            imageurl ? "absolute top-2 right-2" : "mr-4"
          } bg-white nv-icon`}
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <h3 className="capitalize font-semibold">{title}</h3>
        {rating && (
          <div className="flex flex-row items-center">
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <p className="font-light">{votes} votes</p>
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

export default Card;
