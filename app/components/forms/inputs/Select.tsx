import { forwardRef, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: { label: string; value: string }[];
  error?: string | null;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, children, className, error, ...props }, ref) => (
    <select
      ref={ref}
      {...props}
      className={classNames(
        'cursor-pointer block w-full h-12 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500',
        { 'border-red-600': error },
        className
      )}
    >
      {options &&
        options.map((option, optionIndex) => (
          <option key={optionIndex} value={option?.value}>
            {option?.label}
          </option>
        ))}

      {children}
    </select>
  )
);
