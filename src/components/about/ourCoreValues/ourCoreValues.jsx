import React from 'react'
import Styles from "./ourCoreValues.module.scss"
import { OurCoreValueList } from '../../../shared/utils/arrayData'
const OurCoreValues = () => {
    return (
        <>
            <div className={Styles.containerValues}>
                <h3><span>Our  </span>  Core Values</h3>
                <div className={Styles.coreValues}>
                    <div className={Styles.coreValuesMap}>
                        {OurCoreValueList.map((item) => (
                            <div key={item.id} className={Styles.coreValueItem}>
                                <img src={item.img} alt={item.header} className={Styles.coreValueImage} />
                                <h3 className={Styles.coreValueHeader}>{item.header}</h3>
                                <p className={Styles.coreValueDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCoreValues
