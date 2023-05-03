import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, FC, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

export type ButtonRef = HTMLButtonElement & HTMLAnchorElement;

export type ButtonAs =
  | keyof Pick<JSX.IntrinsicElements, 'a' | 'button' | 'span'>
  | ((props: ButtonHTMLAttributes<any> & AnchorHTMLAttributes<any> & HTMLAttributes<HTMLSpanElement>) => JSX.Element);

export type ButtonBaseProps = (ButtonHTMLAttributes<any> &
  AnchorHTMLAttributes<any> &
  HTMLAttributes<HTMLSpanElement>) & {
  as?: ButtonAs;
  ref?: ForwardedRef<ButtonRef>;
};

export const ButtonBase: FC<ButtonBaseProps> = forwardRef(
  ({ as: T = 'button', className, disabled, ...props }, ref) => {
    const type = T === 'button' ? 'button' : undefined;

    return (
      <T
        ref={ref}
        type={type}
        disabled={disabled}
        className={classNames(
          'button inline-flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary-300',
          { 'opacity-50 cursor-not-allowed': disabled },
          className
        )}
        {...props}
      />
    );
  }
);
