import { CheckBoxContext } from "@/context/CheckBoxContext";
import React, { ChangeEvent, ReactNode, useContext } from "react";

interface Props {
  checked?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

function CheckBox({ children, checked, onChange, value }: Props) {
  const context = useContext(CheckBoxContext);

  if (!context || !value) {
    return (
      <label htmlFor={value}>
        <input
          id={value}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {children}
      </label>
    );
  }

  const { toggleValue, isChecked } = context;

  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("[checked]:", e.target.checked);
    toggleValue({ checked: e.target.checked, value });
  };

  return (
    <label htmlFor={value}>
      <input
        id={value}
        type="checkbox"
        checked={isChecked(value)}
        onChange={handleChangeCheckBox}
      />
      {children}
    </label>
  );
}

export default CheckBox;
