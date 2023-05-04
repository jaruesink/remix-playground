import { Form, useFetcher } from '@remix-run/react';
import { Input } from './forms/inputs/Input';
import { SubmitButton } from './forms/buttons';
import { Select } from './forms/inputs/Select';
import { colorNames } from 'app/util/colors';

export const ThemeForm = () => {
  const themeCreateFetcher = useFetcher();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    themeCreateFetcher.submit(formData, {
      action: '/resources/themes',
      method: 'POST',
    });
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <h2 className='font-bold'>Add a New Theme</h2>
      <Input placeholder='Theme Name' name='name' />
      <Select
        name='color'
        options={[
          { label: 'Select a color', value: 'false' },
          ...colorNames.map((color) => ({
            label: color,
            value: color,
          })),
        ]}
      />
      <div>
        <SubmitButton className='min-w-[200px] text-black'>
          Add Theme
        </SubmitButton>
      </div>
    </Form>
  );
};
