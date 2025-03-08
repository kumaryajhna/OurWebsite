import React, { useState, useEffect } from 'react'
import Styles from './businessSimple.module.scss'
import { Images } from '../../../shared/utils/images'
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../browserRouter/paths/paths';
import ContentImgAnimate from './contentImgAnimate/contentImgAnimate';
import AnimatedCube from './animatedCube/animatedCube';
import ContactUsDialogBox from '../../contactus/contactusDialogBox/contactusDialogBox';
import ContactusDialogBoxMobile from '../../contactus/contactusDialogBoxMobile/contactusDialogBoxMobile';


const BusinessSimple = () => {
    const [open, setOpen] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);


    const navigate = useNavigate(); // Initialize the useNavigate hook
    const handleClickAppointemnt = () => {
        navigate(Paths.BookanAppointment); // Programmatically navigate to the "/about" route
    };
    const text = "Let’s simplify your business with the power of technology.";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true); // Controls cursor visibility

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 100); // Adjust typing speed

            return () => clearTimeout(timeout);
        } else {
            // Hide cursor after typing completes
            setTimeout(() => {
                setShowCursor(false);
                setTimeout(() => {
                    setDisplayText("");
                    setIndex(0);
                    setShowCursor(true); // Show cursor when restart
                }, 2000); // 2-second pause before restarting
            }, 100); // Small delay before hiding cursor
        }
    }, [index]);



    return (
        <>
            <div className={Styles.containerBusiness}>

                <div className={Styles.dotComp2}><img src={Images.dotLighterImg} className={Styles.dotImg1} alt="Simple" /></div>

                <div className={Styles.animatedCube}><AnimatedCube /></div>

                {/* <div className={Styles.dotComp3}><img src={Images.dotImg} className={Styles.dotImg1} alt="Simple" /></div> */}

                <div className={Styles.content}>
                    <div>
                        <h3>Simplifying Business with Smart Solutions</h3>

                        <p>Running a business should be effortless. Our innovative digital solutions streamline processes, enhance efficiency, and drive growth -
                            <b style={{ color: '#1b1464' }}> so you can focus on what truly matters.</b>
                        </p>
                        <span className={Styles.statementText}>
                            {displayText}
                            {showCursor && <span className={Styles.cursor}>_</span>}
                        </span>

                    </div>
                    {/* <button className={Styles.btnAppointment} onClick={handleClickAppointemnt}>Talk to our expert</button> */}
                    <button className={Styles.btnAppointmentMobile}
                        onClick={() => {
                            setOpenMobile(true);
                            window.scrollTo(0, 0);
                        }}
                    >Talk to our expert</button>
                    <button className={Styles.btnAppointment}
                        onClick={() => {
                            setOpen(true);
                            window.scrollTo(0, 0);
                        }}
                    >Talk to our expert</button>

                    {open && <ContactUsDialogBox onClose={() => setOpen(false)} />}

                    {openMobile &&
                        <div className="mobileContactUs">
                            <ContactusDialogBoxMobile onClose={() => setOpenMobile(false)} />
                        </div>
                    }



                </div>
                <ContentImgAnimate />


            </div>

        </>
    )
}

export default BusinessSimple
