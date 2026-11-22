import { defineAction } from 'astro:actions';
import type { ActionResult, HandlerResult } from './action-result';
import { login } from './features/login';
import { signup } from './features/signup';
import { signupWithAsyncSchema } from './features/signup-async-schema';
import { submitTodos } from './features/todos';
import { path } from './path';
import { setSubmitted } from './submitted';

/** An action for a form: on success, it keeps the accepted values for the Forms page and redirects there. */
const formAction = (handler: (formData: FormData) => Promise<HandlerResult>) =>
  defineAction({
    accept: 'form',
    handler: async (formData, context): Promise<ActionResult> => {
      const result = await handler(formData);
      if (!result.success) return result;
      setSubmitted(context.cookies, result.value);
      return { success: true, redirectTo: path('/forms') };
    },
  });

export const server = {
  login: formAction(login),
  signup: formAction(signup),
  signupAsyncSchema: formAction(signupWithAsyncSchema),
  todos: formAction(submitTodos),
};
