import { PrismaClient } from '@prisma/client';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

export async function loader() {
  const prisma = new PrismaClient();
  const tests = await prisma.test.findMany();
  return json({ tests });
}

export default function Index() {
  const { tests } = useLoaderData();

  return (
    <main className='container p-8 mx-auto'>
      <h1 className='text-blue-500 font-bold mb-4'>
        Welcome to the Remix Playground
      </h1>

      <ul className='pl-8'>
        <li className='list-disc'>
          <Link to='/deferred'>Deferred Example</Link>
        </li>
        <li className='list-disc'>
          <Link to='/dynamic-themes'>Dynamic Themes</Link>
        </li>
      </ul>
    </main>
  );
}
