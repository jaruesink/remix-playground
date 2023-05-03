import { FC } from 'react';
import { ButtonBaseProps } from './ButtonBase';
import { Button } from './Button';

export interface SubmitButtonProps extends ButtonBaseProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant='primary' type='submit' {...props}>
      {children || 'Submit'}
    </Button>
  );
};
