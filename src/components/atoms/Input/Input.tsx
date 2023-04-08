import React, { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <input
      className="p-4 w-full h-10 border-solid border border-black rounded-md"
      {...props}
    />
  );
};

export default Input;
