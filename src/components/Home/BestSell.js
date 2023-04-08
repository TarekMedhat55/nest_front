import Link from "next/link";
import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import ProductSlider from "../ProductSlider";
import { Products } from "@/data";

const BestSell = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="best-sell section">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>Daily Best Sells</h2>
          <div className="details d-flex align-items-center">
            <Link href="/shop">Explore More</Link>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="best-sell-banner">
              <h3>
                Bring nature
                <br /> into your
                <br /> home
              </h3>
              <Link href="/shop">
                <span>shop now</span>
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="best-sell-content">
              <Slider {...settings}>
                {Products.map((product) => (
                  <ProductSlider key={product._id} product={product} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSell;
