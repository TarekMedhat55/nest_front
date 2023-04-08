import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ reviews, rating }) => {
  const tempStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <>
        {rating >= index + 1 ? (
          <BsStarFill className="star-fill" />
        ) : rating >= number ? (
          <BsStarHalf className="star-half" />
        ) : (
          <BsStar className="star-empty" />
        )}
      </>
    );
  });
  return (
    <div className="stars">
      {tempStar}
      {reviews && <span className="review">({reviews}) </span>}
    </div>
  );
};

export default Stars;
