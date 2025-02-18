import React from 'react';
import Styles from './servicesList.module.scss';
import { ListOfServices } from '../../../shared/utils/arrayData';

const ServicesList = () => {
    return (
        <div className={Styles.containerServicesList}>
            <h3><span>Our</span> Services</h3>

            {ListOfServices.map(service => (
                <div
                    key={service.id}
                    className={service.id % 2 === 0 ? Styles.odd : Styles.even}
                >
                    <div className={Styles.contentInfo}>
                        <h4>{service.header}</h4>
                        {service.list.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div>

                    <img
                        src={service.img}
                        alt={service.header}
                        className={Styles.serviceImage}
                    />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesList;
