import React, { useState, useEffect, ChangeEvent } from "react";
import "./CustomInput.scss";

interface CustomInputProps {
  properties?: string;
  resValue?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ properties, resValue, placeholder }) => {
  const [value, setValue] = useState<string>(properties || "");

  useEffect(() => {
    if (properties) {
      setValue(properties);
    }
  }, [properties]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValue(newValue);
  };

  return (
    <>
      <input
        type="text"
        className="custom-input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <span className="custom-input__value">{value ? resValue || '' : ''}</span>
    </>
  );
};

export default CustomInput;
