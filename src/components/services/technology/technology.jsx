import React from 'react'
import Styles from './technology.module.scss'
import { TechnologyImages } from '../../../shared/utils/arrayData'
const Technology = () => {
    return (
        <>
            <div className={Styles.containerTechnology}>
                <h4>Technology Expertise</h4>
                <p>NetServ leverages a wide range of the industry leading
                    technologies to effectively deliver robust DevOps</p>
                <div className={Styles.technologyItem}>
                    {TechnologyImages.map((image, index) => (
                        <div key={index} >
                            <img
                                src={image}
                                alt={`Technology ${index + 1}`}
                                className={Styles.technologyImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Technology
