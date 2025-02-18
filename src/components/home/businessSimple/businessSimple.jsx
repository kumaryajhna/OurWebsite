import React from 'react'
import Styles from './businessSimple.module.scss'
import { Images } from '../../../shared/utils/images'
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../browserRouter/paths/paths';
import DotComponent from './dotComponent/dotComponent';
import ContentImgAnimate from './contentImgAnimate/contentImgAnimate';

const BusinessSimple = () => {

    const navigate = useNavigate(); // Initialize the useNavigate hook
    const handleClickAppointemnt = () => {
        navigate(Paths.BookanAppointment); // Programmatically navigate to the "/about" route
    };
    return (
        <div className={Styles.containerBusiness}>
            {/* <div className={Styles.dotComp1}><DotComponent /></div>
            <div className={Styles.dotComp2}><DotComponent /></div>
            <div className={Styles.dotComp3}><DotComponent /></div>
            <div className={Styles.dotComp4}><DotComponent /></div> */}
            <div className={Styles.dotComp1}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>
            <div className={Styles.dotComp2}><img src={Images.dotLighterImg} className={Styles.dotImg1} alt="Simple" /></div>
            <div className={Styles.dotComp5}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>
            <div className={Styles.dotComp3}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>
            <div className={Styles.dotComp4}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div>




            <div className={Styles.content}>
                <div>
                    <h3>We make your Business Simple</h3>
                    {/* <p>You have a disruptive idea? We have a technology team who will build it and scale it.</p> */}
                    <p>We are a leading software development company, dedicated to delivering solutions tailored to your business needs. With our expertise, experience, and commitment, we transform your software visions into reality.</p>
                </div>
                <button className={Styles.btnAppointment} onClick={handleClickAppointemnt}>Book An Appointment</button>

            </div>
            <ContentImgAnimate />
            <div className={Styles.circleOne}>
                <div className={Styles.circleTwo}>
                    <div className={Styles.circle}>
                        <div className={Styles.polygon}>
                            <img src={Images.simpleImg} className={Styles.simpleImg} alt="Simple" />
                            <img src={Images.simpleImg2} className={Styles.simpleImg2} alt="Simple" />
                            <img src={Images.simpleImg3} className={Styles.simpleImg4} alt="Simple" />
                            <img src={Images.simpleImg4} className={Styles.simpleImg3} alt="Simple" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessSimple

// import React, { useState, useEffect } from 'react';
// import Styles from './businessSimple.module.scss';
// import { Images } from '../../../shared/utils/images';

// const BusinessSimple = () => {
//     const [imageIndices, setImageIndices] = useState([0, 1, 2, 3]);

//     useEffect(() => {
//         const cycleImages = setInterval(() => {
//             setImageIndices(prevIndices => {
//                 const newIndices = [...prevIndices];
//                 newIndices.push(newIndices.shift()); // Move the first element to the end
//                 return newIndices;
//             });
//         }, 1000); // Change images every second

//         return () => clearInterval(cycleImages); // Cleanup interval on unmount
//     }, []);

//     const imageArray = [Images.simpleImg, Images.simpleImg2, Images.simpleImg3, Images.simpleImg4];

//     return (
//         <div className={Styles.containerBusiness}>
//             <div className={Styles.content}>
//                 <div>
//                     <h3>We make your Business Simple</h3>
//                     <p>You have a disruptive idea? We have a technology team who will build it and scale it.</p>
//                 </div>
//                 <button className={Styles.btnAppointment}>Book An Appointment</button>
//             </div>

//             <div className={Styles.circleOne}>
//                 <div className={Styles.circleTwo}>
//                     <div className={Styles.circle}>
//                         <div className={Styles.polygon}>
//                             <img src={imageArray[imageIndices[0]]} className={Styles.simpleImg} alt="Simple" />
//                             <img src={imageArray[imageIndices[1]]} className={Styles.simpleImg2} alt="Simple" />
//                             <img src={imageArray[imageIndices[2]]} className={Styles.simpleImg4} alt="Simple" />
//                             <img src={imageArray[imageIndices[3]]} className={Styles.simpleImg3} alt="Simple" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BusinessSimple;
