import React from "react";
import Styles from "./dotComponent.module.scss"; // Import the SCSS file for styling

const DotComponent = () => {
  return (
    <div className={Styles.dotGrid}>
      {Array.from({ length: 25 }).map((_, index) => (
        <div key={index} className={Styles.dot}></div>
      ))}
    </div>
  );
};

export default DotComponent;
