import { forwardRef } from 'react';
import { Input, InputProps } from '../inputs/Input';
import { FieldLabel } from './FieldLabel';
import { FieldWrapper } from './FieldWrapper';
import { FieldError } from './FieldError';
import { FieldProps } from './Field.types';
import { useCombinedFieldProps } from './Field.helpers';
import { FieldInput } from './FieldInput';

export interface FieldTextProps extends FieldProps<InputProps> {}

export const FieldText = forwardRef<HTMLDivElement, FieldTextProps>(({ inputComponent, ...props }, ref) => {
  const { wrapperProps, labelProps, inputProps, errorProps } = useCombinedFieldProps<InputProps>({
    type: 'text',
    ...props
  });

  return (
    <FieldWrapper ref={ref} {...wrapperProps}>
      <FieldLabel {...labelProps} />

      <FieldInput type={inputProps.type}>
        {!inputComponent && <Input {...inputProps} />}
        {!!inputComponent && inputComponent(inputProps)}
      </FieldInput>

      <FieldError {...errorProps} />
    </FieldWrapper>
  );
});
