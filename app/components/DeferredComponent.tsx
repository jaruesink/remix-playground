import { Await, useFetcher } from '@remix-run/react';
import { Suspense } from 'react';

export const DeferredComponent = () => {
  const fetcher = useFetcher();

  // build UI with these
  // fetcher.state;
  // fetcher.type;
  // fetcher.submission;
  // fetcher.data;

  return (
    <fetcher.Form action='/resources/deferred-example'>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={fetcher.data.example_data}>
          {(data) => <p>{data}</p>}
        </Await>
      </Suspense>
      <button type='submit'>Submit</button>
    </fetcher.Form>
  );
};
