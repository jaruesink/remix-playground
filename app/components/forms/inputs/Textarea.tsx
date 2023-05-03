import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string | null;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={4}
    {...props}
    className={classNames(
      'block w-full py-3 px-3 text-sm border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500',
      { 'border-red-600': !!error },
      className
    )}
  />
));
