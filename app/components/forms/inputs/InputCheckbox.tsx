import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface InputCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string | null;
}

export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(({ className, error, ...props }, ref) => (
  <input
    ref={ref}
    id={props.id || props.name}
    {...props}
    type="checkbox"
    className={classNames(
      'block h-5 w-5 border border-gray-300 rounded text-primary-600 focus:ring-primary-500',
      { 'border-red-600': !!error },
      className
    )}
  />
));
