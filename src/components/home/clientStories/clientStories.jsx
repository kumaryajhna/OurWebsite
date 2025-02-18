import React from 'react'
import SlideStories from './slideStories/slideStories'
import Styles from './clientStories.module.scss'
const ClientStories = () => {
    return (
        <>
            <div className={Styles.containerClientStories}>
                <h3><span>Clients </span>  Stories</h3>
                <SlideStories />
            </div>
        </>
    )
}

export default ClientStories
