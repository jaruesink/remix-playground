import { Form } from '@remix-run/react';

export const ThemeForm = () => {
  return (
    <Form>
      Add a New Theme
      <input name='name' />
      <button type='submit'>Save</button>
    </Form>
  );
};
