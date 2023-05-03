import { FC, forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonBase, ButtonBaseProps, ButtonRef } from './ButtonBase';

export interface ButtonProps extends ButtonBaseProps {
  variant?: 'default' | 'primary' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const selectStructureClassNames = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'link':
      return 'underline';
    default:
      return 'inline-flex items-center rounded-md font-bold border';
  }
};

const selectSizeClassNames = (variant: ButtonProps['variant'], size: ButtonProps['size']) => {
  if (variant === 'link') {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  }

  switch (size) {
    case 'sm':
      return 'text-sm py-2 px-4';
    case 'lg':
      return 'text-lg py-4 px-6';
    default:
      return 'text-base py-3 px-5';
  }
};

const selectVariantClassNames = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'button--primary text-white bg-primary-500 hover:bg-primary-700 focus:border-primary-500';
    case 'link':
      return 'button--link text-primary-600 hover:text-primary-500';
    default:
      return 'button--default border-primary-100 text-primary-600 hover:text-primary-800 bg-primary-50 hover:bg-primary-100';
  }
};

export const Button: FC<ButtonProps> = forwardRef<ButtonRef, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <ButtonBase
      {...props}
      className={classNames(
        selectStructureClassNames(variant),
        selectSizeClassNames(variant, size),
        selectVariantClassNames(variant),
        className
      )}
    />
  )
);
