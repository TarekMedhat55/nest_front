import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import { BsGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const BigNavbar = () => {
  const router = useRouter();
  const [navFixed, setNavFixed] = useState(false);
  const showNav = () => {
    if (window.scrollY > 250) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNav);
    return () => {
      window.removeEventListener("scroll", showNav);
    };
  }, []);
  console.log(navFixed);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="big-navbar">
      {!navFixed && (
        <div className="big-nav-top ">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="left">
              <ul className="d-flex">
                <li>
                  <Link href="about-us">about us</Link>
                </li>
                <li>
                  <Link href="my-account">my account</Link>
                </li>
                <li>
                  <Link href="wishlist">wishlist</Link>
                </li>
                <li>
                  <Link href="orders">orders</Link>
                </li>
              </ul>
            </div>
            <div className="right d-flex">
              <h6>
                Need help? Call Us: <span className="call">+ 1800 900</span>
              </h6>
              <h6>
                <span>english</span> <MdKeyboardArrowDown />
              </h6>
              <h6>
                <span className="currency">usd</span> <MdKeyboardArrowDown />
              </h6>
            </div>
          </div>
        </div>
      )}
      {!navFixed && (
        <div className="big-nav-middle">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="left d-flex align-items-center">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={"/images/logo.svg"}
                    alt="nest logo"
                    width={180}
                    height={62}
                  />
                </Link>
              </div>
              <div className="search d-flex align-items-center">
                <form className="d-flex align-items-center">
                  <div className="search-select">
                    <Select
                      options={options}
                      placeholder="all categories"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          border: "none",
                          textTransform: "capitalize",
                          color: "#253d4e",
                          boxShadow: "none",
                        }),
                      }}
                    />
                  </div>
                  <div className="search-input">
                    <input type="text" placeholder="Search for items..." />
                  </div>
                  <div className="search-icon">
                    <BsSearch />
                  </div>
                </form>
              </div>
            </div>
            <div className="right d-flex align-items-center">
              <Link href="/compare">
                <div className="content">
                  <div className="details d-flex ">
                    <div className="icon">
                      <Image
                        src={"/images/icon-compare.svg"}
                        alt="compare"
                        width={25}
                        height={30}
                      />
                    </div>
                    <div className="title align-self-end">
                      <h6>compare</h6>
                    </div>
                  </div>
                  <p className="count">5</p>
                </div>
              </Link>
              <Link href="/wishlist">
                <div className="content">
                  <div className="details d-flex ">
                    <div className="icon">
                      <Image
                        src={"/images/icon-heart.svg"}
                        alt="compare"
                        width={25}
                        height={30}
                      />
                    </div>
                    <div className="title align-self-end">
                      <h6>wishlist</h6>
                    </div>
                  </div>
                  <p className="count">5</p>
                </div>
              </Link>
              <Link href="/cart">
                <div className="content">
                  <div className="details d-flex ">
                    <div className="icon">
                      <Image
                        src={"/images/icon-cart.svg"}
                        alt="compare"
                        width={25}
                        height={30}
                      />
                    </div>
                    <div className="title align-self-end">
                      <h6>cart</h6>
                    </div>
                  </div>
                  <p className="count">5</p>
                </div>
              </Link>
              <Link href="/account">
                <div className="content">
                  <div className="details d-flex ">
                    <div className="icon">
                      <Image
                        src={"/images/icon-user.svg"}
                        alt="compare"
                        width={25}
                        height={30}
                      />
                    </div>
                    <div className="title align-self-end">
                      <h6>account</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div
        className={`${navFixed ? "big-nav-bottom active" : "big-nav-bottom"}`}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="left d-flex align-items-center">
            <div className="browse-categories d-flex align-items-center">
              <BsGridFill />
              <h6>browse all categories</h6>
              <MdKeyboardArrowDown />
            </div>
            <div className="links">
              <ul className="list-unstyled d-flex align-items-center">
                <li>
                  <Link
                    href="/deals"
                    className={
                      router.pathname == "/deals"
                        ? "d-flex align-items-center active"
                        : "d-flex align-items-center"
                    }
                  >
                    <Image
                      src={"/images/icon-hot.svg"}
                      alt="deals"
                      width={20}
                      height={20}
                    />
                    <span className="deals">Deals</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={router.pathname == "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={router.pathname == "/about" ? "active" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className={router.pathname == "/shop" ? "active" : ""}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors"
                    className={router.pathname == "/vendors" ? "active" : ""}
                  >
                    Vendors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={router.pathname == "/contact-us" ? "active" : ""}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right d-flex align-items-center">
            <div className="support me-3">
              <Image
                src={"/images/icon-headphone.svg"}
                alt="support number"
                width={36}
                height={38}
              />
            </div>
            <div className="number">
              <p>
                1900 - 888
                <span>24/7 Support Center</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNavbar;
