import React, { useState, useRef } from "react";
import { Controller } from "react-hook-form";
import moment from "moment";
import { CiCalendar } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
// import Label from "../label/label";

const InputText = ({
  type = "text",
  name,
  control,
  label,
  placeholder,
  rules,
  onChange,
  style,
  labelCss,
  leftIcon,
  rigthIcon,
  rightIconStyles,
  leftIconStyles,
  inputCss,
  disabled = false,
  onFocusTransparent = false,
  onPaste,
  max,
  min,
  maxLength,
  readOnly = false,
  forwardedRef,
  focusNextInput,
  toolTip,
  changePasswordIcon,
  validationRules,
  allowFutureDate,
  iconColor = "rgba(82,0,98,0.7)",
  dateIconStyles,
  errorCss,
  tabIndex,
  stylesInput
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const [maxDate, setMaxDate] = useState(
    max ? max : allowFutureDate ? "" : moment(new Date()).format("YYYY-MM-DD")
  );
  const [minDate, setMinDate] = useState(min ? min : "");
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const styles = {
    inputContainer: { marginBottom: "10px", ...inputCss },
    input: {
      fontFamily: "Inter, system-ui, Helvetica, Arial, sans-serif",
      width: style?.width ? style?.width : "300px",
      height: style?.height ? style?.height : "35px",
      border: style?.border ? style?.border : "1px solid #eaecf0",
      borderRadius: style?.borderRadius ? style?.borderRadius : "5px",
      backgroundColor: style?.backgroundColor ? style?.backgroundColor : "",
      padding: style?.padding ? style?.padding : "0px 10px 0px 10px",
      margin: style?.margin ? style?.margin : "0px",
      fontSize: style?.fontSize ? style?.fontSize : "14px",
      fontWeight: style?.fontWeight ? style?.fontWeight : "400",
      color: style?.color ? style?.color : "rgba(9, 30, 52, 0.85)",
      position: "relative",
      textAlign: style?.textAlign ? style?.textAlign : "rgba(9, 30, 52, 0.85)",
      ...stylesInput,
      // boxShadow:' 0px 1px 2px 0px #1018280D',
      transition: "border-color 0.3s ease", // Smooth transition for hover and focus effects

      // ...(isHovered && !isFocused ? { border: "1px solid rgba(82,0,98,.4)" } : {}),
      // ...(isFocused ? { border: "2px solid yellow" } : {}),
      // ...(isFocused && onFocusTransparent ? { border: "none", outline: 'transparent' } : {}),

      ...(isHovered && !isFocused
        ? { border: "1px solid rgba(82,0,98,.4)" }
        : {}), // Hover style
      ...(isFocused
        ? { border: "1px solid rgba(82,0,98,.4)", outline: "none" }
        : {}), // Focus style
      ...(isFocused && onFocusTransparent
        ? { border: "none", outline: "transparent" }
        : {}),

      "::placeholder": {
        color: style?.placeholderColor ? style.placeholderColor : "blue",
        opacity: "0.1", // Optional: Adjust opacity
      },
    },
    error: { color: "#d92d20", height: "15px", fontSize: "12px", ...errorCss },
    info: { height: "15px", fontSize: "13px", ...errorCss, color: "#Ffa500" },
    flxCol: {
      display: "flex",
      flexDirection: "row",
    },
    labelCss: {
      color: "rgba(91, 91, 91, 1)",
      ...labelCss,
    },
    leftIcon: {
      position: "relative",
      zIndex: "2",
      margin: style?.leftIconMargin
        ? style.leftIconMargin
        : "12px -30px 10px 10px",
      display: "flex",
      alignItems: "center",
      ...leftIconStyles,
    },
    rightIcon: {
      position: "relative",
      zIndex: "2",
      margin: style?.rightIconMargin
        ? style.rightIconMargin
        : "10px 30px 10px -30px",
      // marginright: "-100px",
      display: "flex",
      alignItems: "center",
      borderLeft: "1px solid #black",

      ...rightIconStyles,
    },
    tooltipIcon: {
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      margin: "-2px  0 0 15px",
      cursor: "pointer",
    },
  };
  const handleChange = async (e, field) => {
    const { selectionStart, selectionEnd } = e.target;
    // const newValue = await validateInput(e, validationRules);
    // field.onChange(newValue);
    let newValue = e.target?.value;
    field.onChange(newValue);

    if (onChange) {
      onChange(newValue);
    }

    requestAnimationFrame(() => {
      if (inputRef?.current && type != "date") {
        inputRef?.current?.setSelectionRange(selectionStart, selectionEnd);
      }
    });
  };

  const handleIconClick = () => {
    inputRef?.current?.showPicker();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Entetab") {
      e.preventDefault();
      if (focusNextInput()) {
        focusNextInput();
      }
    }
  };

  const validateInput = async (event) => {
    const input = event.target;
    let value = input.value;

    switch (input.type) {
      case "text":
        if (
          maxLength > 0 &&
          value?.length > 0 &&
          validationRules?.emptyString &&
          !isValidLength(value, maxLength, setShowMessage)
        ) {
          setText(`Reached max ${maxLength} characters`);
          value = value.slice(0, maxLength);
        } else {
          setText("");
        }
        break;
      case "email":
        break;
      default:
    }
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(
          input.selectionStart,
          input.selectionEnd
        );
      }
    });
    return value;
  };

  const togglePasswordVisibility = () => {
    if (type === "password") {
      setShowPassword(!showPassword);
      changePasswordIcon(!showPassword);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (inputRef.current) {
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  };

  return (
    <div style={styles.inputContainer}>
      {label?.length > 0 && (
        <span styles={styles.labelCss}>{label}</span>
        // <Label
        //   name={label}
        //   fontWeight="400"
        //   fontSize="16px"
        //   styles={styles.labelCss}
        // />
      )}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <div style={styles.flxCol}>
              {leftIcon && <span style={styles.leftIcon}>{leftIcon}</span>}
              <input
                {...field}
                tabIndex={tabIndex}
                type={showPassword ? "text" : type}
                placeholder={placeholder}
                style={styles.input}
                value={field.value}
                ref={(e) => {
                  field.ref(e);
                  inputRef.current = e;
                }}
                onChange={(e) => handleChange(e, field)}
                disabled={disabled}
                onPaste={onPaste}
                max={type === "date" ? maxDate : ""}
                min={type === "date" ? minDate : ""}
                maxLength={maxLength}
                readOnly={readOnly}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => handleFocus()}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                id={type === "date" ? "date-input" : ""}
                autoComplete="off"
              />
              {rigthIcon && (
                <span
                  style={styles.rightIcon}
                  onClick={togglePasswordVisibility}
                >
                  {rigthIcon}
                </span>
              )}
              {type === "date" && (
                <span style={styles.rightIcon} onClick={handleIconClick}>
                  <CiCalendar
                    size={22}
                    style={{ color: iconColor, ...dateIconStyles }}
                  />
                </span>
              )}
              {toolTip?.isShow && (
                <span style={styles.tooltipIcon} title={toolTip?.message}>
                  <BsInfoCircle color="blue" />
                </span>
              )}
            </div>
            <span style={styles.error}>{error?.message}</span>
            {showMessage && <span style={styles.info}>{text}</span>}
          </>
        )}
      />
    </div>
  );
};

export default InputText;
