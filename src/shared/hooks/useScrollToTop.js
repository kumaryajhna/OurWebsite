// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const UseScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);
// };

// export default UseScrollToTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Adds the smooth transition effect
    });
  }, [location.pathname]);

  return null; // Ensures the component doesn't render anything
};

export default UseScrollToTop;
