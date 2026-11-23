import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import nunjucks from 'nunjucks';
import { contactMethods, contactSummary, descriptionMaxLength, errorFor, pageTitle, serviceName } from './journeys';
import { screenErrors, type Screen } from './routes';

const templates: Record<string, string> = import.meta.glob('./templates/*.njk', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const govukFrontend = join(dirname(createRequire(import.meta.url).resolve('govuk-frontend/package.json')), 'dist');

/** Loads this package's templates, which Vite bundles, so the server doesn't need them on disk. */
const bundled: nunjucks.ILoader = {
  getSource: (name) => {
    const src = templates[`./templates/${name}`];
    return src === undefined ? null : { src, path: name, noCache: false };
  },
};

const env = new nunjucks.Environment([bundled, new nunjucks.FileSystemLoader(govukFrontend)], { autoescape: true });

/** Renders a screen with govuk-frontend's Nunjucks macros, as a govuk-frontend service would. */
export function render(base: string, screen: Screen) {
  const errors = screenErrors(screen);
  return env.render(`${screen.name}.njk`, {
    ...screen,
    base,
    serviceName,
    serviceUrl: `${base}/licence`,
    pageTitle: pageTitle({ title: screen.title, errors }),
    errorList: errors.map(({ id, text }) => ({ href: `#${id}`, text })),
    errorFor: (id: string) => {
      const text = errorFor(errors, id);
      return text ? { text } : undefined;
    },
    contactMethods,
    contactSummary,
    descriptionMaxLength,
  });
}
