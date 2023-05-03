import { ChangeEvent, ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import { FieldErrorComponent, FieldErrorProps } from './FieldError';
import { FieldLabelComponent, FieldLabelProps } from './FieldLabel';
import { ValidationBehaviorOptions } from 'remix-validated-form/dist/types/internal/getInputProps';

export interface FieldProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'> {
  id?: string;
  formId?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  inputRef?: ForwardedRef<HTMLInputElement>;
  type?: string;
  name: string;
  value?: string;
  label?: string;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: T & { ref?: React.RefObject<HTMLInputElement> };
  labelProps?: Omit<FieldLabelProps, 'labelComponent'>;
  errorProps?: Omit<FieldErrorProps, 'errorComponent'>;
  inputComponent?: (props: T) => ReactNode;
  labelComponent?: FieldLabelComponent;
  errorComponent?: FieldErrorComponent;
  fieldOptions?: {
    /**
     * Allows you to configure a custom function that will be called
     * when the input needs to receive focus due to a validation error.
     * This is useful for custom components that use a hidden input.
     */
    handleReceiveFocus?: (() => void) | undefined;
    /**
     * Allows you to specify when a field gets validated (when using getInputProps)
     */
    validationBehavior?: Partial<ValidationBehaviorOptions> | undefined;
    /**
     * The formId of the form you want to use.
     * This is not necesary if the input is used inside a form.
     */
    formId?: string | undefined;
  };
}
