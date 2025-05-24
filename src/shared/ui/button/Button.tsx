import { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const defaultClassName = 'py-3 px-2 border border-black rounded-md cursor-pointer';
  return (
    <button {...props} className={`${defaultClassName} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
