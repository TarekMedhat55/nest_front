import React from "react";
import Stars from "./Stars";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductSlider = ({ product }) => {
  const {
    name,
    productId,
    category,
    reviews,
    rating,
    priceAfterDiscount,
    price,
    productQuantity,
    images,
    sold,
  } = product;
  return (
    <div className="product" key={productId}>
      <div className="product-img">
        <Link href="/shop">
          <Image
            src={images[0]}
            width={228}
            height={228}
            alt={name}
            className="show"
          />
          <Image
            src={images[1]}
            width={228}
            height={228}
            alt={name}
            className="hide"
          />
        </Link>
      </div>
      <div className="product-details">
        <span className="category">{category.name}</span>
        <Link href={`shop/${productId}`}>
          <h5>{name.length > 40 ? `${name.slice(0, 40)}...` : name}</h5>
        </Link>
        <Stars reviews={reviews} rating={rating} />
        <div className="price d-flex align-items-center">
          {priceAfterDiscount ? (
            <p className="new-price">${priceAfterDiscount}</p>
          ) : (
            <p className="new-price">${price}</p>
          )}
          {priceAfterDiscount && <p className="ms-2 old-price">${price}</p>}
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${(sold / productQuantity) * 100}%`,
            }}
            aria-valuenow={(sold / productQuantity) * 100}
            aria-valuemin="0"
            aria-valuemax={productQuantity}
          ></div>
        </div>
        <p className="product-sold-count">
          sold: {sold} / {productQuantity}
        </p>
        <button type="button" className="add-cart">
          <AiOutlineShoppingCart />
          <span className="cart-title">add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
