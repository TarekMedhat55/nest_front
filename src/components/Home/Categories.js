import { AllCategories } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
const Categories = () => {
  const colors = [
    "#F2FCE4",
    "#FFFCEB",
    "#ECFFEC",
    "#FEEFEA",
    "#FFF3EB",
    "#FFF3FF ",
    "#F2FCE4",
    "#FEEFEA",
    "#FFFCEB",
  ];
  return (
    <section className="feature-categories section">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>Featured Categories</h2>
          <div className="details d-flex align-items-center">
            <Link href="/categories">Explore More</Link>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="feature-categories-content">
          {AllCategories.slice(0, 10).map((category, index) => {
            const categoryId = category._id;
            return (
              <Link
                href={`categories/${categoryId}/products`}
                className="category"
                key={category._id}
                style={{
                  backgroundColor: `${colors[index]}`,
                }}
              >
                <div className="category-img">
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="category-item">
                  <h5>{category.name}</h5>
                  <p>{category.count} items</p>
                </div>
              </Link>
            );
          })}
        </div>
        {/*** shop */}
        <section className="categories-shop section">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="first-category-shop">
                <h3>
                  Everyday Fresh &<br />
                  Clean with Our
                  <br />
                  Products
                </h3>
                <div className="detail">
                  <Link href="/shop">
                    <span className="shop-title">shop now</span>
                    <span className="arrow-icon">
                      <IoIosArrowRoundForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" d-none d-lg-block col-lg-4  ">
              <div className="second-category-shop">
                <h3>
                  Make your Breakfast
                  <br />
                  Healthy and Easy
                </h3>
                <div className="detail">
                  <Link href="/shop">
                    <span className="shop-title">shop now</span>
                    <span className="arrow-icon">
                      <IoIosArrowRoundForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3 mt-md-0">
              <div className="third-category-shop">
                <h3>
                  The best Organic
                  <br />
                  Products Online
                </h3>
                <div className="detail">
                  <Link href="/shop">
                    <span className="shop-title">shop now</span>
                    <span className="arrow-icon">
                      <IoIosArrowRoundForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Categories;
