import { Products } from "@/data";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ProductList from "../ProductList";

const PopularProduct = () => {
  return (
    <section className="popular-products section">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>popular products</h2>
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

export default PopularProduct;
