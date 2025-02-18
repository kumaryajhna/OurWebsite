import React from 'react'
import Styles from "./contentImgAnimate.module.scss"
import { Images } from '../../../../shared/utils/images'

const ContentImgAnimate = () => {
    return (
        <>
            <div className={Styles.circleOne}>
                <div className={Styles.circleTwo}>
                    <div className={Styles.circle}>
                        <div className={Styles.polygon}>
                        </div>
                            <img src={Images.simpleImg} className={Styles.simpleImg} alt="Simple" />
                            <img src={Images.simpleImg2} className={Styles.simpleImg2} alt="Simple" />
                            <img src={Images.simpleImg3} className={Styles.simpleImg4} alt="Simple" />
                            <img src={Images.simpleImg4} className={Styles.simpleImg3} alt="Simple" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentImgAnimate
