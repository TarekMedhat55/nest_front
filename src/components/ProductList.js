import Image from "next/image";
import Stars from "./Stars";
import { BsCart, BsEye, BsHeart } from "react-icons/bs";
import Link from "next/link";
import { TbArrowsShuffle2 } from "react-icons/tb";

const ProductList = ({ product }) => {
  return (
    <div className="product-list">
      <div className="product-head">
        <div className="product-img">
          <Link href="/shop">
            <Image
              src={product.images[0]}
              width={228}
              height={228}
              alt={product.name}
              className="show"
            />
            <Image
              src={product.images[1]}
              width={228}
              height={228}
              alt={product.name}
              className="hide"
            />
          </Link>
        </div>
        <div className="product-details ">
          <p>
            <BsHeart />
          </p>
          <p>
            <TbArrowsShuffle2 />
          </p>
          <p>
            <BsEye />
          </p>
        </div>
      </div>
      <div className="product-body">
        <div className="product-category">
          <p>{product.category.name}</p>
        </div>
        <div className="product-title">
          <h2>
            <Link href="/shop">
              {product.name.length > 40
                ? `${product.name.slice(0, 40)}...`
                : product.name}
            </Link>
          </h2>
        </div>
        <div className="product-star">
          <Stars reviews={product.reviews} rating={product.rating} />
        </div>
        <div className="product-vendor">
          <h6>
            <span>By: </span>
            {product.vendor.name}
          </h6>
        </div>
        <div className="product-info d-flex align-items-center justify-content-between">
          <div className="prices d-flex">
            <p className="price">
              $
              {product.priceAfterDiscount
                ? product.priceAfterDiscount
                : product.price}
            </p>
            {product.priceAfterDiscount && (
              <p className="align-self-end ms-2 old-price">${product.price}</p>
            )}
          </div>
          <div className="add-cart">
            <button type="button" className="d-flex">
              <BsCart />
              <span className="ms-2 text-capitalize">add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
