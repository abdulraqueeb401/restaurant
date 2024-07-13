import PropTypes from "prop-types";
import Star from "./Star";

const StarRating = ({ rating, id }) => {
  const totalStars = 5;
  let starRating = rating;
  const starFill = new Array(5).fill(0);
  let i = 0;
  while (starRating && i < totalStars) {
    if (starRating <= 1) {
      starFill[i] = Math.round(starRating * 100);
      break;
    }
    starFill[i] = 100;
    starRating--;
    i++;
  }
  return (
    <div className="flex flex-row gap-0.5">
      {starFill.map((fill, index) => (
        <Star id={id} key={index} fillPercentage={fill} />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  id: PropTypes.string,
};
export default StarRating;
