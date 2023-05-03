import { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface FieldWrapperProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  type?: string;
  error?: string;
}

export const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapperProps>(
  ({ name, type, className, error, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(
        'field col-span-12',
        {
          [`field--${type}`]: type,
          'field--has-error': !!error
        },
        className
      )}
      {...props}
    />
  )
);
