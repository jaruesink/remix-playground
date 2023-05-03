import { Form } from '@remix-run/react';
import { Input } from './forms/inputs/Input';
import { SubmitButton } from './forms/buttons';

export const ThemeForm = () => {
  return (
    <Form className='flex flex-col gap-2'>
      <h2 className='font-bold'>Add a New Theme</h2>
      <Input placeholder='Theme Name' name='name' />
      <div>
        <SubmitButton className='min-w-[200px] text-black'>Save</SubmitButton>
      </div>
    </Form>
  );
};
