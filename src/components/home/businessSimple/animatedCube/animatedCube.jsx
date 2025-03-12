import React, { useState, useEffect } from "react";
import Styles from "./animatedCube.module.scss"; // Import SCSS for styling
import ReactIcon3D from "../../../../assets/images/home/homeIcon/reactIcon3D";
import AngularIcon3D from "../../../../assets/images/home/homeIcon/angularIcon3D";
import FigmaIcon3D from "../../../../assets/images/home/homeIcon/figmaIcon3D";
import NodeJSIcon3D from "../../../../assets/images/home/homeIcon/nodeJSIcon3D";
import CSharpIcon3D from "../../../../assets/images/home/homeIcon/cSharpIcon3D";
import JavaScriptIcon3D from "../../../../assets/images/home/homeIcon/javaScriptIcon3D";

const AnimatedCube = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 90);
    }, 1000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.scene}>
      <div className={Styles.cube} style={{ transform: `rotateY(${rotation}deg) rotateX(${rotation / 2}deg)` }}>
        <div className={`${Styles.face} ${Styles.front}`}><FigmaIcon3D width='35px' height='35px' /></div>
        <div className={`${Styles.face} ${Styles.back}`}><AngularIcon3D width='35px' height='35px' /></div>
        <div className={`${Styles.face} ${Styles.left}`}><ReactIcon3D width='35px' height='35px' /></div>
        <div className={`${Styles.face} ${Styles.right}`}><NodeJSIcon3D width='35px' height='35px'  /></div>
        <div className={`${Styles.face} ${Styles.top}`}><CSharpIcon3D width='35px' height='35px' /></div>
        <div className={`${Styles.face} ${Styles.bottom}`}><JavaScriptIcon3D width='35px' height='35px' /></div>
      </div>
    </div>
  );
};

export default AnimatedCube;
