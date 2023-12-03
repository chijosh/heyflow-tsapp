import { useState, useEffect, ChangeEvent, FC } from "react";
import "./CustomInput.scss";

interface CustomInputProps {
  properties?: string;
  resValue?: string;
  placeholder?: string;
}

const CustomInput: FC<CustomInputProps> = ({ properties, resValue, placeholder }) => {
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
    <div className="custom-input">
      <input
        type="text"
        className="custom-input__data"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <span className="custom-input__value">{value ? resValue || '' : ''}</span>
    </div>
  );
};

export default CustomInput;
