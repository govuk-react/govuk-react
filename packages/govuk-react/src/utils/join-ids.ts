/** Ids for `aria-describedby`, each once, so a description isn't read twice when the caller already passes one of them. */
export function joinIds(...ids: Array<string | false | undefined>): string | undefined {
  const unique = new Set(ids.flatMap((id) => (id ? id.split(/\s+/).filter(Boolean) : [])));
  return [...unique].join(' ') || undefined;
}
