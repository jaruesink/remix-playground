import { PrismaClient } from '@prisma/client';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  const prisma = new PrismaClient();
  const tests = await prisma.test.findMany();
  return json({ tests });
}

export default function Index() {
  const { tests } = useLoaderData();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1 className='text-blue-500 font-bold'>Welcome to Remix</h1>

      <p>{JSON.stringify(tests)}</p>
    </div>
  );
}
