import { forwardRef } from 'react';
import { Select, SelectProps } from '../inputs/Select';
import { FieldLabel } from './FieldLabel';
import { FieldWrapper } from './FieldWrapper';
import { FieldError } from './FieldError';
import { FieldProps } from './Field.types';
import { useCombinedFieldProps } from './Field.helpers';
import { FieldInput } from './FieldInput';

export interface FieldSelectProps extends Omit<FieldProps<SelectProps>, 'type'> {
  options: SelectProps['options'];
}

export const FieldSelect = forwardRef<HTMLDivElement, FieldSelectProps>(
  ({ options, children, inputComponent, ...props }, ref) => {
    const { wrapperProps, labelProps, inputProps, errorProps } = useCombinedFieldProps<SelectProps>({
      type: 'select',
      ...props
    });

    return (
      <FieldWrapper ref={ref} {...wrapperProps}>
        <FieldLabel {...labelProps} />

        <FieldInput>
          {!inputComponent && (
            <Select {...inputProps} options={options}>
              {children}
            </Select>
          )}
          {inputComponent && inputComponent({ ...inputProps, options })}
        </FieldInput>

        <FieldError {...errorProps} />
      </FieldWrapper>
    );
  }
);
