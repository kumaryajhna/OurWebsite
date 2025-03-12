import React, { useState, useEffect, lazy, Suspense } from 'react';
import Styles from './businessSimple.module.scss';
import { Images } from '../../../shared/utils/images';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../browserRouter/paths/paths';

const ContentImgAnimate = lazy(() => import('./contentImgAnimate/contentImgAnimate'));
const AnimatedCube = lazy(() => import('./animatedCube/animatedCube'));
const ContactUsDialogBox = lazy(() => import('../../contactus/contactusDialogBox/contactusDialogBox'));
const ContactusDialogBoxMobile = lazy(() => import('../../contactus/contactusDialogBoxMobile/contactusDialogBoxMobile'));

const BusinessSimple = () => {
    const [open, setOpen] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const navigate = useNavigate();

    const handleClickAppointemnt = () => {
        navigate(Paths.BookanAppointment);
    };

    const text = "Let’s simplify your business with the power of technology.";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setShowCursor(false);
                setTimeout(() => {
                    setDisplayText("");
                    setIndex(0);
                    setShowCursor(true);
                }, 2000);
            }, 100);
        }
    }, [index]);

    return (
        <div className={Styles.containerBusiness}>
            <div className={Styles.dotComp2}>
                <img src={Images.dotLighterImg} className={Styles.dotImg1} alt="Simple" />
            </div>

            {/* <Suspense > */}
                <div className={Styles.animatedCube}>
                    <AnimatedCube />
                </div>
            {/* </Suspense> */}

            <div className={Styles.content}>
                <div>
                    <h3>Simplifying Business with Smart Solutions</h3>
                    <p>
                        Running a business should be effortless. Our innovative digital solutions streamline processes, enhance efficiency, and drive growth -
                        <b style={{ color: '#1b1464' }}> so you can focus on what truly matters.</b>
                    </p>
                    <span className={Styles.statementText}>
                        {displayText}
                        {showCursor && <span className={Styles.cursor}>_</span>}
                    </span>
                </div>

                <button
                    className={Styles.btnAppointmentMobile}
                    onClick={() => {
                        setOpenMobile(true);
                        window.scrollTo(0, 0);
                    }}
                >
                    Talk to our expert
                </button>
                <button
                    className={Styles.btnAppointment}
                    onClick={() => {
                        setOpen(true);
                        window.scrollTo(0, 0);
                    }}
                >
                    Talk to our expert
                </button>

                {/* <Suspense > */}
                    {open && <ContactUsDialogBox onClose={() => setOpen(false)} />}
                    {openMobile && (
                        <div className="mobileContactUs">
                            <ContactusDialogBoxMobile onClose={() => setOpenMobile(false)} />
                        </div>
                    )}
                {/* </Suspense> */}
            </div>

            {/* <Suspense > */}
                <ContentImgAnimate />
            {/* </Suspense> */}
        </div>
    );
};

export default BusinessSimple;


// Loading...

