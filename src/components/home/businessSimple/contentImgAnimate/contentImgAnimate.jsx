import React, { useEffect, useState } from 'react';
import Styles from "./contentImgAnimate.module.scss";
import { Images } from '../../../../shared/utils/images';

const ContentImgAnimate = () => {
    const initialImages = [Images.simpleImg2, Images.simpleImg3, Images.simpleImg4, Images.simpleImg];

    const [imageSequence, setImageSequence] = useState(initialImages);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); // Start fade-out effect

            setTimeout(() => {
                setImageSequence((prevSequence) => {
                    const rotatedSequence = [...prevSequence];
                    rotatedSequence.push(rotatedSequence.shift()); // Rotate images
                    return rotatedSequence;
                });
                setIsFading(false); // Start fade-in effect
            }, 500); // Fade duration (must match CSS)
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
       
            <div className={Styles.circleOne}>
                <div className={Styles.circleTwo}>
                    <div className={Styles.circle}>
                        <div className={Styles.polygon}></div>

                        {/* Main Image */}
                        <img
                            src={imageSequence[0]}
                            className={`${Styles.mainImg} ${isFading ? Styles.fadeOut : Styles.fadeIn}`}
                            alt="Main"
                        />

                        {/* Sub Images */}
                        {imageSequence.slice(1).map((img, index) => (
                            <div className={Styles.imgOuter} key={index}>
                                <img
                                    src={img}
                                    className={`${Styles[`simpleImg${index + 2}`]} ${isFading ? Styles.fadeOut : Styles.fadeIn}`}
                                    alt={`Sub Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={Styles.dotComp1}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>
            <div className={Styles.dotComp5}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>
            <div className={Styles.dotComp3}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>
        </>
    );
};

export default ContentImgAnimate;
