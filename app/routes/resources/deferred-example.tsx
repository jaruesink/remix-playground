import { type ActionArgs, defer } from '@remix-run/node';

export async function loader({ request }: ActionArgs) {
  const example_data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 5000);
  });

  return defer({
    example_data,
  });
}
