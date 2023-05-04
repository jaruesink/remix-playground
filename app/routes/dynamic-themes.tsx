import { PrismaClient } from '@prisma/client';
import { ActionArgs, json } from '@remix-run/node';
import {
  Form,
  useFetcher,
  useLoaderData,
  useRevalidator,
} from '@remix-run/react';
import { ThemeForm } from 'app/components/ThemeForm';
import { Button, SubmitButton } from 'app/components/forms/buttons';
import { Select } from 'app/components/forms/inputs/Select';
import { TrashIcon } from 'app/components/icons/trash';
import { formDataToObject } from 'app/util/form';

export async function loader() {
  const prisma = new PrismaClient();
  const themes = await prisma.theme.findMany();
  const siteSettings = await prisma.siteSettings.findFirst();
  const selectedTheme = await prisma.theme.findUnique({
    where: { id: siteSettings?.themeId },
  });
  return json({ themes, selectedTheme });
}

export async function action({ request }: ActionArgs) {
  const prisma = new PrismaClient();
  const formData = await request.formData();
  const data = formDataToObject(formData) as {
    themeId: string;
  };
  const { themeId } = data;

  const siteSettings = await prisma.siteSettings.update({
    where: { id: 1 },
    data: {
      themeId: parseInt(themeId),
    },
  });

  return json({ siteSettings });
}

export default function Index() {
  const { themes, selectedTheme } = useLoaderData<typeof loader>();
  const revalidator = useRevalidator();
  const deleteThemeFetcher = useFetcher();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const form = e.currentTarget.closest('form') as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData) as {
      themeId: string;
    };
    const { themeId } = data;
    deleteThemeFetcher.load(`/resources/themes-delete/${themeId}`);
    revalidator.revalidate();
  };

  return (
    <main className='container mx-auto p-8'>
      <h1 className='text-primary-500 font-bold mb-8'>
        Dynamic Themes Example
      </h1>

      <Form
        className='mb-8 flex flex-col gap-2'
        action='/dynamic-themes'
        method='POST'
      >
        <label className='font-bold mb-2' htmlFor='themeId'>
          Selected Theme
        </label>
        <Select
          name='themeId'
          defaultValue={selectedTheme?.id.toString()}
          options={themes.map((theme) => ({
            label: theme.name,
            value: theme.id.toString(),
          }))}
        />
        <div className='flex gap-4 w-full'>
          <SubmitButton className='w-[200px]'>Save Theme</SubmitButton>
          <Button onClick={handleDelete}>
            <TrashIcon />
          </Button>
        </div>
      </Form>

      <ThemeForm />
    </main>
  );
}
