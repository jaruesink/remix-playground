import { LinksFunction, MetaFunction, json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import stylesheet from './styles/tailwind.css';
import { generateCSSVariablesInnerHTML } from './util/theme';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader = async () => {
  const cssRootVariables = generateCSSVariablesInnerHTML({
    primary_theme_colors: {
      color_50: '#F9FAFB',
      color_100: '#F3F4F6',
      color_200: '#E5E7EB',
      color_300: '#D1D5DB',
      color_400: '#9CA3AF',
      color_500: '#6B7280',
      color_600: '#4B5563',
      color_700: '#374151',
      color_800: '#1F2937',
      color_900: '#111827',
    },
  });
  return json({ cssRootVariables });
};

export default function App() {
  const { cssRootVariables } = useLoaderData();

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        {cssRootVariables && (
          <style dangerouslySetInnerHTML={{ __html: cssRootVariables }}></style>
        )}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
