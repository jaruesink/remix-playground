import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface FieldInputProps extends HTMLAttributes<HTMLDivElement> {
  type?: string;
}

export const FieldInput: FC<FieldInputProps> = ({ type, className, ...props }) => (
  <div
    {...props}
    className={classNames(
      'field__input',
      {
        [`field__input--${type}`]: type
      },
      className
    )}
  />
);
