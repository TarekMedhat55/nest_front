import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Stars from "../Stars";
import Time from "react-time-format";
import { reviews } from "@/data";

const Review = () => {
  const [title, setTitle] = useState("");
  const [ratings, setRatings] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="comments">
      <div className="row">
        <div className="col-md-7">
          <div className="customer-reviews">
            <h4 className="customer-header reviews">Customer Reviews</h4>
            {reviews.map((comment) => (
              <div className="customer-review-content" key={comment._id}>
                <div className="row d-flex align-items-center">
                  <div className="col-md-2">
                    <div className="customer-img">
                      <p>
                        {comment.firstName.charAt(0)}
                        {comment.lastName.charAt(0)}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="customer-details ">
                      <div className="customer-details-header d-flex justify-content-between">
                        <div className="top">
                          <h5>
                            {comment.firstName} {comment.lastName.charAt(0)}.
                          </h5>
                          <p>
                            {/* <Time
                          value={comment.createdAt}
                          format="YYYY/MM/DD"
                        /> */}
                            2022/11/07
                          </p>
                        </div>
                        <Stars rating={comment.ratings} />
                      </div>
                      <div className="customer-details-body"></div>
                      <p>{comment.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="customer-form">
            <form>
              <div className="form-stars">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        value={ratingValue}
                        onClick={() => setRatings(ratingValue)}
                        className="star-input"
                        name="ratings"
                      />
                      <BsStarFill
                        color={
                          ratingValue <= (hover || ratings)
                            ? "#ffc207"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <textarea
                cols="30"
                rows="10"
                placeholder="write a review"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              <button type="submit">add review</button>
            </form>
          </div>
        </div>
        <div className="col-md-4 offset-1">
          <div className="overall-rating">
            <h4 className="customer-header">Overall Rating</h4>
            <div className="overall-stars d-flex align-items-center">
              {/* <Stars stars={stars} />
              <p>{stars.toFixed(2)} out of 5</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
