import React, { ButtonHTMLAttributes } from 'react';

const COLORS = {
  blue: 'bg-blue-400 hover:bg-blue-600',
  red: 'bg-red-400 hover:bg-red-600',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof COLORS;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={
        'w-full min-w-fit h-10 rounded-md ' + COLORS[props.color || 'blue']
      }
      {...props}
    />
  );
};

export default Button;
