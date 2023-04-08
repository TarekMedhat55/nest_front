import React from "react";
import ProductList from "../ProductList";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { Products } from "@/data";

const NewProducts = () => {
  return (
    <section className="new-products section">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>new products</h2>
          <div className="details d-flex align-items-center">
            <Link href="/shop">Explore More</Link>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="products-list">
          {Products.slice(0, 10).map((product) => (
            <ProductList key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
