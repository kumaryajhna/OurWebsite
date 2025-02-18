import React from 'react'
import Styles from './ourProducts.module.scss'
import { OurProductsInfo } from '../../../shared/utils/arrayData'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { Images } from '../../../shared/utils/images';

const ourProducts = () => {
    return (
        <>
            <div className={Styles.containerProducts}>
                <h3><span>Our</span> Projects</h3>
                <div className={Styles.productsMap}>
                    {OurProductsInfo.map(item => (
                        <div
                            key={item.id}
                            className={item.id % 2 === 0 ? Styles.evenProducts : Styles.oddProducts}
                        >
                            <div className={Styles.contentInfo}>
                                <div className={Styles.contentInfoTop}>
                                    <h4>{item.projectName}</h4>
                                    <h6>{item.description}</h6>
                                    {item.details.map((item, index) => (
                                        // <p key={index}><IoMdCheckmarkCircleOutline/>{item}</p>
                                        // <p key={index}><FiCheckCircle/>{item}</p>
                                        <p key={index} className={Styles.iconDetails}>
                                            <img src={Images.circleCheck} />
                                            {item}</p>


                                    ))}
                                </div>
                                <button className={Styles.btnDemo}>Book a Demo</button>

                            </div>
                            <div>
                                <img
                                    src={item.img}
                                    alt={item.header}
                                    className={Styles.itemImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ourProducts
