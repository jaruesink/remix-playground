import { ValidatedForm, FormProps as ValidatedFormProps, Validator } from 'remix-validated-form';
import { withYup } from '@remix-validated-form/with-yup';
import { AnyObjectSchema } from 'yup';
import classNames from 'classnames';

export interface FormProps<T extends object> extends Omit<ValidatedFormProps<T>, 'validator'> {
  className?: string;
  validator?: Validator<T>;
  validationSchema?: AnyObjectSchema;
}

export function Form<T extends object>({ className, validator, validationSchema, children, ...props }: FormProps<T>) {
  const formValidator = validationSchema ? withYup(validationSchema) : validator;

  if (!formValidator) {
    console.error('Form must have either a validationSchema or validator');
    throw new Error('Form must have either a validationSchema or validator');
  }

  return (
    <ValidatedForm className={classNames('form', className)} validator={formValidator} {...props}>
      {children}
    </ValidatedForm>
  );
}
