import React from "react";
import Style from "../styles/Styles.css";

const InputField = ({
  type,
  label,
  onChange,
  value,
  id,
  style,
  placeholder,
  name,
  onClick,
}) => {
  return (
    <div>
      {label && <label for={id}>{label}</label>}
      <input
        id={id}
        name={name}
        style={style}
        // className={Style.input}
        placeholder={placeholder}
        type={type}
        value={value}
        onClick={() => console.log({ onClick })}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
export default InputField;
