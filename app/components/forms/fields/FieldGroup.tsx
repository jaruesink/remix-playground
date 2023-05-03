import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface FieldGroupProps extends HTMLAttributes<HTMLDivElement> {}

export const FieldGroup: FC<FieldGroupProps> = ({ className, ...props }) => (
  <div className={classNames('field-group grid grid-cols-12 gap-y-4 sm:gap-x-4 my-6', className)} {...props} />
);
