/** A path within the example, under Astro's `base`, so it can be served from a subpath such as /examples/astro. */
export const path = (to: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${to}`;
