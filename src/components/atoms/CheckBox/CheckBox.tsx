import React, { InputHTMLAttributes } from 'react';

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement>;

const CheckBox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
  return <input className="w-8 h-8" type="checkbox" {...props} />;
};

export default CheckBox;
