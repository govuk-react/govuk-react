import type { APIRoute } from 'astro';
import { render } from '../../nunjucks';
import { route } from '../../routes';

const base = '/govuk-frontend';

export const ALL: APIRoute = async ({ params, request, cookies, redirect }) => {
  const result = await route({ base, path: params.path ?? '', request, cookies });
  if ('redirect' in result) return redirect(result.redirect, 303);
  if ('notFound' in result) return new Response(null, { status: 404 });
  return new Response(render(base, result.screen), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
