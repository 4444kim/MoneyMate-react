import { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  const defaultClassName = 'px-3 py-2  border border-gray-400 rounded-md w-full';

  return <input className={`${defaultClassName} ${className}`} {...props} />;
};

export default Input;
