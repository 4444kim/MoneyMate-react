import { FC, SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  className?: string;
}

const Select: FC<SelectProps> = ({ children, className = '', ...props }) => {
  const defaultClassName = 'px-4 py-2 border border-black rounded-md';

  return (
    <select className={`${defaultClassName} ${className}`} {...props}>
      {children}
    </select>
  );
};

export default Select;
