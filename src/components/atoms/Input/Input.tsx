import React, { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <input
      className="m-5 p-3 w-1/2 h-10 border-solid border border-black rounded-md"
      {...props}
    />
  );
};

export default Input;
