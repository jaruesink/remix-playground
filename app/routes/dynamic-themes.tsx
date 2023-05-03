import { PrismaClient } from '@prisma/client';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ThemeForm } from 'app/components/ThemeForm';

export async function loader() {
  const prisma = new PrismaClient();
  const themes = await prisma.theme.findMany();
  return json({ themes });
}

export default function Index() {
  const { themes } = useLoaderData();

  return (
    <main className='container mx-auto p-8'>
      <h1 className='text-blue-500 font-bold'>Dynamic Themes Example</h1>
      <p>{JSON.stringify(themes)}</p>

      <ThemeForm />
    </main>
  );
}
