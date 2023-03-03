import { type ActionArgs, defer } from '@remix-run/node';

export async function action({ request }: ActionArgs) {
  const example_data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 5000);
  });

  return defer({
    example_data,
  });
}
