import { Await, useFetcher } from '@remix-run/react';
import { Suspense } from 'react';

export const DeferredComponent = () => {
  const fetcher = useFetcher();

  // build UI with these
  // fetcher.state;
  // fetcher.type;
  // fetcher.submission;
  // fetcher.data;

  console.log('>>>>>', fetcher.data);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={fetcher.data?.example_data}>
          {(data) => <p>{data}</p>}
        </Await>
      </Suspense>
      <button
        onClick={() => {
          fetcher.load('/resources/deferred-example');
        }}
      >
        Submit
      </button>
    </>
  );
};
