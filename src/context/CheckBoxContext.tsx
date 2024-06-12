import React, { createContext, ReactNode, useMemo, useState } from "react";

type toggleValue = ({
  checked,
  value,
}: {
  checked: boolean;
  value: string;
}) => void;
type isChecked = (value: string) => boolean;

export interface ICheckBoxContext {
  toggleValue: toggleValue;
  isChecked: isChecked;
}

export const CheckBoxContext = createContext<ICheckBoxContext | null>(null);

interface Props {
  label: string;
  children: ReactNode;
  values: string[];
  onChange: (params: string[]) => void;
}

function CheckBoxProvider({ label, children, values, onChange }: Props) {
  const isChecked = (value: string) => values.includes(value);
  const toggleValue = ({
    checked,
    value,
  }: {
    checked: boolean;
    value: string;
  }) => {
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter((item) => item !== value));
    }
  };
  // const value = useMemo(()=>{
  //   toggleValue,
  //   isChecked,
  // },[toggleValue,isChecked])

  const value = {
    toggleValue,
    isChecked,
  };
  return (
    <>
      <label>{label}</label>
      <CheckBoxContext.Provider value={value}>
        {children}
      </CheckBoxContext.Provider>
    </>
  );
}

export default CheckBoxProvider;
