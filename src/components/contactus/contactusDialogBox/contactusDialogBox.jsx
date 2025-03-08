import React, { useEffect, useState } from "react";
import Styles from "./contactusDialogBox.module.scss";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { Images } from "../../../shared/utils/images";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import InputText from "../../../reusables/componentsForms/inputText";
import { useForm } from "react-hook-form";
import TextArea from "../../../reusables/componentsForms/textArea";
import { IoClose } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import CloseIcon from "../../../assets/images/home/homeIcon/closeIcon";
const inputStyle = {
    width: '-webkit-fill-available ',
    height: '42px',
    marginBottom: '10px'
}
const ContactUsDialogBox = ({ onClose }) => {
    const {
        handleSubmit,
        submitForm,
        errors,
        control,
        setValue,
        trigger,
        focusNextInput,
        getValues,
        reset,
    } = useForm();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Disable scrolling when dialog opens
        document.body.style.overflow = "hidden";

        setTimeout(() => setIsVisible(true), 10); // Small delay to trigger animation

        return () => {
            // Restore scrolling when dialog closes
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 400); // Delay closing to match animation
    };

    return (
        <div className={`${Styles.overlay} ${isVisible ? Styles.show : ""}`}>
            <div className={`${Styles.dialog} ${isVisible ? Styles.dialogShow : ""}`}>
                <div className={Styles.mapCss}>
                    <img src={Images.locationCompany} />
                </div>
                <div className={Styles.contactForm}>
                    <h2>Contact Us</h2>
                    {/* <div className={Styles.iconClose} onClick={handleClose}><RiCloseLargeLine size={22} color="rgb(191 191 191)"/></div> */}
                    <div className={Styles.iconClose} onClick={handleClose}>
                        <CloseIcon />
                    </div>
                    <InputText
                        name="name"
                        label=""
                        validationRules={{ emptyString: true }}
                        maxLength={200}
                        control={control}
                        stylesInput={inputStyle}
                        onChange={(e) => handleFormChange(e, "name")}
                        onFocus={(e) => trigger("name")}
                        onBlur={(e) => trigger("name")}
                        placeholder={"Name"}
                        focusNextInput={(e) => {
                            focusNextInput("email");
                        }}
                    />
                    <InputText
                        name="email"
                        label=""
                        validationRules={{ emptyString: true }}
                        maxLength={200}
                        control={control}
                        stylesInput={inputStyle}
                        onChange={(e) => handleFormChange(e, "email")}
                        onFocus={(e) => trigger("email")}
                        onBlur={(e) => trigger("email")}
                        placeholder={"Email"}
                        focusNextInput={(e) => {
                            focusNextInput("phoneNumber");
                        }}
                    />
                    <InputText
                        name="phoneNumber"
                        label=""
                        validationRules={{ emptyString: true }}
                        maxLength={200}
                        control={control}
                        stylesInput={inputStyle}

                        onChange={(e) => handleFormChange(e, "phoneNumber")}
                        onFocus={(e) => trigger("phoneNumber")}
                        onBlur={(e) => trigger("phoneNumber")}
                        placeholder={"Phone Number"}
                        focusNextInput={(e) => {
                            focusNextInput("country");
                        }}
                    />
                    <InputText
                        name="country"
                        label=""
                        validationRules={{ emptyString: true }}
                        maxLength={200}
                        control={control}
                        stylesInput={inputStyle}
                        onChange={(e) => handleFormChange(e, "country")}
                        onFocus={(e) => trigger("country")}
                        onBlur={(e) => trigger("country")}
                        placeholder={"Country"}
                        focusNextInput={(e) => {
                            focusNextInput("message");
                        }}
                    />
                    <TextArea
                        type="text"
                        name="remarks"
                        control={control}
                        placeholder={"Provide your project details"}
                        onChange={(e) =>
                            handleFormChange(e?.length > 0 ? e : null, "remarks")
                        }
                        maxLength={255}
                        maxLengthobj={{
                            show: true,
                            maxLength: 255,
                            message: "Max Length",
                        }}
                        customStyles={{
                            fontSize: "14px",
                            width: "-webkit-fill-available",
                            height: "120px",
                        }}
                    />
                    <div className={Styles.buttonsForm}>
                        <button className={Styles.sendAppointment}>Submit</button>
                    </div>
                </div>
                <div className={Styles.ContactUsDialogBoxFooter}>
                    <div className={Styles.detailInfo}>
                        <div className={Styles.iconText}>
                            <BiSolidPhoneCall size={20} />
                            <span>+91 8222822115, +91 8222822116</span>
                            {/* <span>+91 8222822116</span> */}


                        </div>
                        <div className={Styles.iconText}>
                            <IoMailSharp size={20} />
                            <span>contact@pacteazy.com</span>
                        </div>
                        <div className={Styles.iconText}>
                            <MdLocationPin size={20} />
                            {/* <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span> */}
                            <span>Arundathi Nagar, Vizianagaram 535003, Andhra Pradesh, India</span>

                        </div>
                    </div>
                    <div className={Styles.headerSocial}>
                        <h6>Follow us</h6>
                        <div className={Styles.imagesSocialMedia}>
                            {/* <div><FaFacebookSquare size={22} /></div> */}
                            <div><AiFillInstagram size={20} /></div>
                            <div><FaXTwitter size={18} /></div>
                            <div><FaYoutube size={22} /></div>
                            {/* <div><BsThreadsFill size={18} /></div> */}
                            <div><FaLinkedin size={18} /></div>
                            {/* <div><img src={Images.facebook} alt="Facebook" /></div> */}
                            {/* <div><img src={Images.instagram} alt="Instagram" /></div> */}
                            {/* <div><img src={Images.xIcon} alt="X" /></div> */}
                            {/* <div><img src={Images.youtube} alt="YouTube" /></div> */}
                            {/* <div><img src={Images.threads} alt="Threads" /></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsDialogBox;

