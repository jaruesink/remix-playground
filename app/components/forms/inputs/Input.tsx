import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className={classNames(
      'block w-full h-12 px-3 text-sm border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500',
      { 'border-red-600': !!error },
      className
    )}
  />
));
