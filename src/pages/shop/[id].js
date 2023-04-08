import Layout from "@/components/Layout";
import AdditionalInfo from "@/components/ProductPage/AdditionalInfo";
import Description from "@/components/ProductPage/Description";
import ProductImages from "@/components/ProductPage/ProductImages";
import Review from "@/components/ProductPage/Review";
import Vendor from "@/components/ProductPage/Vendor";
import Stars from "@/components/Stars";
import { product } from "@/data";
import { useState } from "react";
const Product = () => {
  const [index, setIndex] = useState(0);
  return (
    <Layout title="Nest ">
      <section className="product-page section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="product-image">
                <ProductImages productImages={product.images} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="product-info">
                {product.priceAfterDiscount && (
                  <div className="product-sale">
                    <h5>sale off</h5>
                  </div>
                )}
                <div className="product-name">
                  <h2>{product.name}</h2>
                </div>
                <div className="product-review">
                  <Stars rating={product.rating} reviews={product.reviews} />
                </div>
                <div className="product-price d-flex align-items-center">
                  {product.priceAfterDiscount ? (
                    <h2>${product.priceAfterDiscount}</h2>
                  ) : (
                    <h2>${product.price}</h2>
                  )}
                  <div className="price-discount">
                    <p>
                      {(
                        (product.priceAfterDiscount / product.price) *
                        100
                      ).toFixed(2)}
                      %<span>${product.price}</span>
                    </p>
                  </div>
                </div>
                <div className="product-description">
                  <p>{product.description}</p>
                </div>
                <div className="product-sizes d-flex align-items-center">
                  <h3>size:</h3>
                  <div className="sizes-content d-flex align-items-center">
                    {product.sizes.map((item, index) => (
                      <div className="item " key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product-details d-flex ">
                  <div className="left">
                    <p>
                      type:<span>{product.type}</span>
                    </p>
                    <p>
                      MFG:<span>{product.MFG}</span>
                    </p>
                    <p>
                      life:<span>{product.life}</span>
                    </p>
                  </div>
                  <div className="right">
                    <p>
                      sku:<span>{product.sku}</span>
                    </p>
                    <p>
                      stock:<span>{product.stock}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-more-info">
            <div className="product-menu">
              <ul className="d-flex">
                <li
                  onClick={() => setIndex(0)}
                  className={index === 0 ? "active" : null}
                >
                  Description
                </li>
                <li
                  onClick={() => setIndex(1)}
                  className={index === 1 ? "active" : null}
                >
                  additional info
                </li>
                <li
                  onClick={() => setIndex(2)}
                  className={index === 2 ? "active" : null}
                >
                  Vendor
                </li>
                <li
                  onClick={() => setIndex(3)}
                  className={index === 3 ? "active" : null}
                >
                  reviews <span>()</span>
                </li>
              </ul>
            </div>
            <div className="product-more-details">
              {index === 0 && <Description />}
              {index === 1 && <AdditionalInfo />}
              {index === 2 && <Vendor />}
              {index === 3 && <Review />}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
