/*
 * Messages as in govuk-frontend's localisation: one message, or one for each plural form, with
 * `%{count}` for the number. Elements read them from attributes, which React parts write.
 */

/** A message, or one message for each plural form, as in govuk-frontend's localisation. */
export type Translation = string | Partial<Record<Intl.LDMLPluralRule, string>>;

const pluralForms: Intl.LDMLPluralRule[] = ['zero', 'one', 'two', 'few', 'many', 'other'];

/** The attributes for a message: the message itself, or one attribute for each plural form. */
export function translationAttributes(name: string, message: Translation | undefined) {
  if (message === undefined) return {};
  if (typeof message === 'string') return { [name]: message };
  return Object.fromEntries(
    pluralForms.filter((form) => message[form] !== undefined).map((form) => [`${name}-${form}`, message[form]])
  );
}

/** Reads a message back from attributes written by `translationAttributes`. */
export function translationFromAttributes(element: Element, name: string): Translation | undefined {
  const message = element.getAttribute(name);
  if (message !== null) return message;
  const forms = pluralForms.flatMap((form) => {
    const text = element.getAttribute(`${name}-${form}`);
    return text === null ? [] : [[form, text] as const];
  });
  return forms.length ? Object.fromEntries(forms) : undefined;
}

// An invalid `lang` makes Intl throw.
function safely<T>(create: (locale: string | undefined) => T): T {
  try {
    return create(undefined);
  } catch {
    return create('en');
  }
}

export function withLocale<T>(locale: string | undefined, create: (locale: string | undefined) => T): T {
  try {
    return create(locale);
  } catch {
    return safely(create);
  }
}

/** The message for `count`, in its plural form for the locale, with `%{count}` replaced. */
export function translate(message: Translation, count: number, locale?: string) {
  let text: string | undefined;
  if (typeof message === 'string') text = message;
  else {
    const form = withLocale(locale, (l) => new Intl.PluralRules(l)).select(count);
    text = message[form] ?? message.other;
  }
  const number = withLocale(locale, (l) => new Intl.NumberFormat(l)).format(count);
  return (text ?? '').replaceAll('%{count}', number);
}
