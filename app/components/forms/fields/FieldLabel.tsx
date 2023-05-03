import { FC, LabelHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';

export type FieldLabelComponent = (
  labelProps: Omit<FieldLabelProps, 'labelComponent'>
) => ReactElement<any, any> | null;

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLElement> {
  error?: string;
  optional?: boolean;
  labelComponent?: FieldLabelComponent;
}

export const FieldLabel: FC<FieldLabelProps> = ({ className, labelComponent, children, ...props }) => {
  if (!labelComponent && !children) return null;

  if (labelComponent) return labelComponent(props);

  return (
    <div className="flex justify-between text-sm">
      <label
        {...props}
        className={classNames('field__label font-bold text-gray-700 mb-1 whitespace-pre-wrap', className)}
      >
        {children}
      </label>

      {props.optional && <span className="font-normal text-gray-500">Optional</span>}
    </div>
  );
};
