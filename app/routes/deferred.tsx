import { DeferredComponent } from 'app/components/DeferredComponent';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Deferred Example</h1>
      <p>
        Clicking submit below will call for data that gets loaded in a deferred
        fashion when a promise is finished on the server
      </p>
      <DeferredComponent />
    </div>
  );
}
