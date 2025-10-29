"use client";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export default ({
  value,
  className,
  height = "40px",
  buttonClass = "",
  inputClass = "",
  onChange
}) => {
  const phoneNumberObj = parsePhoneNumberFromString(`+${value}`);

  return (
    <PhoneInput
      onChange={onChange}
      value={value}
      buttonStyle={{ background: "white" }}
      inputStyle={{
        width: "100%",
        height,
      }}
      buttonClass={buttonClass}
      inputClass={inputClass}
      className={className}
    />
  );
};
