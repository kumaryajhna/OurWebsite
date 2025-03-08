import React, { useEffect, useState } from "react";
import Styles from "./contactusDialogBoxMobile.module.scss";
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
const ContactusDialogBoxMobile = ({ onClose }) => {
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
        </div>
    );
};

export default ContactusDialogBoxMobile;

