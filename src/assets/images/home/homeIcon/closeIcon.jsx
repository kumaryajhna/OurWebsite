import * as React from "react";
const CloseIcon = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      style={{
        fill: "rgb(191 191 191)",
        stroke: "rgb(191 191 191)",
        strokeWidth: 4,
      }}
      d="M 20,4 3,21 33,50 3,80 20,97 49,67 79,97 95,80 65,50 95,20 80,4 50,34 z"
    />
  </svg>
);
export default CloseIcon;