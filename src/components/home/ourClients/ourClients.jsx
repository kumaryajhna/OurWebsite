import React from 'react'
import Styles from './ourClients.module.scss'
import { Images } from '../../../shared/utils/images'
const OurClients = () => {
    return (
        <div className={Styles.containerOurClients}>
            <h3><span>Our</span> Clients</h3>
            <p>Trusted by many of the world most recognised Companies</p>

            <div className={Styles.clients}>
                <div>
                    <img src={Images.toyota} />
                    <img src={Images.tufts} />
                </div>
                <div>
                    <img src={Images.careCom} />
                    <img src={Images.skanska} />
                </div>
                <div>
                    <img src={Images.boston} />
                    <img src={Images.careCom} />
                </div>
                <div>
                    <img src={Images.cumberland} />
                    <img src={Images.xrHealth} />
                </div>
            </div>
        </div>
    )
}

export default OurClients 
