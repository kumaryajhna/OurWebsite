import React from 'react'
import Styles from './clientStories.module.scss'
import SlideCustomers from './SlideCustomers/SlideCustomers'
const StoriesClient = () => {
    return (
        <>
            <div className={Styles.containerClientStories}>
                <h3><span>Clients </span>  Stories</h3>
                <div className={Styles.customerRating}>Excellent :<p> 4.8 out of 5 </p></div>
                {/* <SlideStories /> */}
                <SlideCustomers/>
            </div>
        </>
    )
}

export default StoriesClient
