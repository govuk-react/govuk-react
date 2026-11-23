import { ActionError, defineAction } from 'astro:actions';
import type { ActionResult, HandlerResult } from './action-result';
import { login } from './features/login';
import { signup } from './features/signup';
import { signupWithAsyncSchema } from './features/signup-async-schema';
import { submitTodos } from './features/todos';
import { path } from './path';
import { setSubmitted } from './submitted';

/** The most items a list field can have. Conform builds an array up to the highest index submitted. */
const maxListLength = 50;

/** Whether the submission names a list item past `maxListLength`, like `tasks[20000].content`. */
const hasLongList = (formData: FormData) =>
  formData
    .keys()
    .some((key) => Array.from(key.matchAll(/\[(\d+)\]/g)).some(([, index]) => Number(index) >= maxListLength));

/** An action for a form: on success, it keeps the accepted values for the Forms page and redirects there. */
const formAction = (handler: (formData: FormData) => Promise<HandlerResult>) =>
  defineAction({
    accept: 'form',
    handler: async (formData, context): Promise<ActionResult> => {
      if (hasLongList(formData)) throw new ActionError({ code: 'BAD_REQUEST', message: 'Too many list items' });
      const result = await handler(formData);
      if (!result.success) return result;
      setSubmitted(context.cookies, context.url, result.value);
      return { success: true, redirectTo: path('/forms') };
    },
  });

export const server = {
  login: formAction(login),
  signup: formAction(signup),
  signupAsyncSchema: formAction(signupWithAsyncSchema),
  todos: formAction(submitTodos),
};
