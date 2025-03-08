/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Controller } from "react-hook-form";
// import Label from "../label/label";

const TextArea = ({
  label,
  name,
  control,
  error,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  style,
  maxLengthobj,
  labelCss,
  onKeyDown,
  textAreaBottom,
  customStyles,
  disabled = false
}) => {
  const styles = {
    columnContainer: { display: 'flex', flexDirection: 'column' },
    textLabel: { color: '#475467', fontWeight: '500', fontSize: '12px', ...textAreaBottom },
    textAreaContainer: { marginBottom: "10px" },
    textArea: {
      width: style?.width ? style?.width : '545px',
      height: style?.height ? style?.height : '',
      // padding: style?.padding ? style?.padding : "0px 10px 0px 40px",
      // minHeight: style?.minHeight ? style?.minHeight : '100px',
      // minHeight : '100px',
      fontWeight: style?.fontWeight ? style?.fontWeight : "400",
      color: style?.color ? style?.color : "rgba(9, 30, 52, 0.85)",
      padding: "8px",
      fontSize: "16px",
      borderRadius: "6px",
      border: style?.border ? style?.border : "1px solid #eaecf0",
      resize: "none",
      fontFamily: 'Inter',
      ...customStyles
    },
    error: {
      color: "red",
      fontSize: '12px'
    },
  };
  const [rmainingChars, setRmainingChars] = useState(maxLengthobj?.maxLength ? maxLengthobj?.maxLength : 0)
  const handleRemainingChars = (e) => {
    let text = e.target.value?.length;
    setRmainingChars(maxLengthobj?.maxLength - parseInt(text))
  }
  return (
    <div style={styles.textAreaContainer}>
      {label && (
        <span styles={labelCss}>{label} </span>
        // <Label name={label} styles={labelCss} />
      )}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <>
            <div style={styles.columnContainer}>
              <textarea
                {...field}
                maxLength={maxLengthobj?.maxLength}
                placeholder={placeholder}
                style={styles.textArea}
                value={field.value}
                onKeyDown={onKeyDown}
                disabled={disabled}
                onChange={(e) => {
                  field.onChange(e);
                  /**Added to calculate dynamic remaining characters */
                  handleRemainingChars(e)
                  if (onChange) {
                    onChange(e.target.value);
                  }
                }}
                onFocus={() => {
                  if (onFocus) {
                    onFocus();
                  }
                }}
                onBlur={() => {
                  if (onBlur) {
                    onBlur();
                  }
                }}
              />
              {/* {maxLengthobj?.show && < span > <Label name={`${rmainingChars} ${rmainingChars == 1000 ? maxLengthobj?.message : ' characters left'}`} styles={styles.textLabel} /> </span>} */}
              {/* {maxLengthobj?.show && < span > {`${rmainingChars} ${rmainingChars == 1000 ? maxLengthobj?.message : ' characters left'}`}  </span>} */}

              <span style={styles.error}>{error?.message}</span>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default TextArea;
