import { FC } from 'react';
import { useIsSubmitting } from 'remix-validated-form';
import { ButtonBaseProps } from './ButtonBase';
import { Button } from './Button';

export interface SubmitButtonProps extends ButtonBaseProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  const isSubmitting = useIsSubmitting();

  return (
    <Button variant="primary" type="submit" disabled={isSubmitting} {...props}>
      {children || (isSubmitting ? 'Submitting...' : 'Submit')}
    </Button>
  );
};
