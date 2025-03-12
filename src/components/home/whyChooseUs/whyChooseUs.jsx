import React, { useEffect, useRef, useState } from "react";
import Styles from "./whyChooseUs.module.scss";
import { Paths } from "../../../browserRouter/paths/paths";
import { useNavigate } from "react-router-dom";
import { ChooseUsList } from "../../../shared/utils/arrayData";
import { Images } from "../../../shared/utils/images";
import ContactUsDialogBox from "../../contactus/contactusDialogBox/contactusDialogBox";
import ContactusDialogBoxMobile from "../../contactus/contactusDialogBoxMobile/contactusDialogBoxMobile";



const WhyChooseUs = () => {
    const navigate = useNavigate();
    const servicesRef = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleIndexes((prevIndexes) => {
                    const newIndexes = [...prevIndexes];
                    entries.forEach((entry) => {
                        const index = servicesRef.current.indexOf(entry.target);
                        if (entry.isIntersecting) {
                            if (!newIndexes.includes(index)) newIndexes.push(index);
                        } else {
                            const indexToRemove = newIndexes.indexOf(index);
                            if (indexToRemove !== -1) newIndexes.splice(indexToRemove, 1);
                        }
                    });
                    return newIndexes;
                });
            },
            { threshold: 0.3 } // Adjust threshold to trigger animations earlier
        );

        servicesRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);
    const [open, setOpen] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    return (
        <>
            <div className={Styles.containerHomeChoose}>
                <h3><span> Why </span>Choose Us </h3>
                <div className={Styles.chooseUsBlock}>
                    <div className={Styles.chooseUsLeft}>
                    <img src={Images.chooseUs} className={Styles.chooseUsImg} />
                    </div>

                    <div className={Styles.chooseLoop}>
                        {ChooseUsList.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (servicesRef.current[index] = el)}
                                className={`${Styles.blockServices} ${visibleIndexes.includes(index)
                                    ? index % 2 === 0
                                        ? Styles.slideIn
                                        : Styles.slideInReverse
                                    : index % 2 === 0
                                        ? Styles.slideOut
                                        : Styles.slideOutReverse
                                    }`}
                            >
                                <div className={Styles.srvImg}>
                                    <img src={item.img} alt={item.header} style={{ width: item.size }} />
                                </div>
                                <div className={Styles.blockServicesRight}>
                                    <h6 className={Styles.blockServicesHeder}>{item.header}</h6>
                                    <p>{item.description}</p>
                                </div>


                            </div>
                        ))}
                    </div>

                </div>
                <div className={Styles.chooseUsBottom}>Let’s build something amazing together!
                    <button
                        className={Styles.btnAppointmentMobile}
                        onClick={() => {
                            setOpenMobile(true);
                            window.scrollTo(0, 0);
                        }}
                    >
                        Get in touch today
                    </button>
                    <button
                        className={Styles.btnAppointment}
                        onClick={() => {
                            setOpen(true);
                            window.scrollTo(0, 0);
                        }}
                    >
                        Get in touch today
                    </button>
                </div>

            </div>
            {open && <ContactUsDialogBox onClose={() => setOpen(false)} />}
            {openMobile && (
                <div className="mobileContactUs">
                    <ContactusDialogBoxMobile onClose={() => setOpenMobile(false)} />
                </div>
            )}

        </>
    );
};

export default WhyChooseUs;
