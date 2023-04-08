import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const showScroll = () => {
    if (window.scrollY > 450) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showScroll);
    return () => {
      window.removeEventListener("scroll", showScroll);
    };
  }, []);
  return (
    <div
      className={scrollToTop ? "scroll-top active" : "scroll-top"}
      onClick={() => window.scrollTo(0, 0)}
    >
      <span>
        <FiArrowUp />
      </span>
    </div>
  );
};

export default ScrollToTop;
