import { FC, HTMLAttributes, JSXElementConstructor, SVGAttributes } from 'react';
import classNames from 'classnames';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';

export interface IconButtonProps extends ButtonBaseProps {
  icon: JSXElementConstructor<any>;
  iconProps?: SVGAttributes<SVGElement>;
}

export const IconButton: FC<IconButtonProps> = ({ icon: Icon, className, iconProps, ...props }) => (
  <ButtonBase
    className={classNames(
      'icon-button inline-flex flex-shrink-0 items-center justify-center w-9 h-9 placeholder:bg-transparent border-none hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 rounded-full',
      className
    )}
    {...props}
  >
    <Icon {...iconProps} className={classNames(iconProps?.className, 'h-6 w-6 text-current')} />
  </ButtonBase>
);
