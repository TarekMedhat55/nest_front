import Layout from "@/components/Layout";
import Paginate from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import Stars from "@/components/Stars";
import { AllCategories, Brands, Products, starsRating } from "@/data";
import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Select from "react-select";

const Shop = () => {
  const options = [
    { value: "createdAt", label: "Recommended" },
    { value: "-price", label: "price: high to low" },
    { value: "+price", label: "price: low to high" },
    { value: "+name", label: "name: a to z" },
    { value: "-name", label: "name: z to a" },
  ];
  return (
    <Layout title="Shop - Nest">
      <section className="shop-page section">
        <div className="container-fluid">
          <div className="shop-content">
            <div className="row">
              <div className="col-lg-2">
                <div className="shop-slider ">
                  <div className="slider-head cat">
                    <h3>categories</h3>
                  </div>
                  <div className="details ">
                    {AllCategories.map((category) => (
                      <div
                        className="details-item d-flex align-items-center justify-content-between"
                        key={category._id}
                      >
                        <div className="name">
                          <h6>{category.name}</h6>
                        </div>
                        <div className="count">
                          <h6>({category.count})</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="shop-slider">
                  <div className="slider-head">
                    <h3>Brands</h3>
                  </div>
                  <div className="details">
                    {Brands.map((brand) => (
                      <div
                        className="details-item d-flex align-items-center justify-content-between"
                        key={brand._id}
                      >
                        <div className="name d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="name"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="name"
                          >
                            {brand.name}
                          </label>
                        </div>
                        <div className="count">
                          <h6>({brand.count})</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="shop-slider">
                  <div className="slider-head">
                    <h3>Price</h3>
                  </div>
                  <div className="details">
                    <div className="input-from d-flex align-items-center">
                      <input type="number" min="0" />
                      <h6>to</h6>
                      <input type="number" min="0" />
                    </div>
                  </div>
                </div>
                <div className="shop-slider">
                  <div className="slider-head">
                    <h3>Reviews</h3>
                  </div>
                  <div className="details">
                    {starsRating.map((rating) => (
                      <div
                        className="details-item  d-flex align-items-center justify-content-between"
                        key={rating._id}
                      >
                        <Stars rating={rating.rating} />
                        <div className="count ms-2">
                          <h6>({rating.rating}.0)</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="shop-products">
                  <div className="shop-product-header d-flex align-items-center justify-content-between">
                    <div className="count">
                      <h3>
                        <span>{Products.length} </span> items for you!
                      </h3>
                    </div>

                    <div className="filter d-flex align-items-center">
                      <div className="product-select d-flex align-items-center">
                        <h5>sort by:</h5>
                        <Select
                          options={options}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              textTransform: "capitalize",
                              color: "#253d4e",
                              boxShadow: "none",
                              width: "200px",
                              outline: "none",
                            }),
                          }}
                        />
                      </div>
                      <div className="product-show">
                        <span>
                          <BsFillGridFill />
                        </span>
                        <span>
                          <BsList />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="products-list shop-page-products">
                    {Products.map((product) => (
                      <ProductList key={product._id} product={product} />
                    ))}
                  </div>
                  <Paginate pageCount={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
