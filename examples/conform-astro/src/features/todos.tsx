import { parseSubmission, report, resolveSubmission, useForm, type SubmissionResult } from '@conform-to/react/future';
import { coerceFormValue } from '@conform-to/zod/v4/future';
import { Button } from 'govuk-react/button';
import { ButtonGroup } from 'govuk-react/button-group';
import * as Checkboxes from 'govuk-react/checkboxes';
import { ErrorMessage } from 'govuk-react/error-message';
import * as Fieldset from 'govuk-react/fieldset';
import { FormGroup } from 'govuk-react/form-group';
import { GridColumn } from 'govuk-react/grid-column';
import { GridRow } from 'govuk-react/grid-row';
import { Heading } from 'govuk-react/heading';
import { InputField } from 'govuk-react/input';
import * as NotificationBanner from 'govuk-react/notification-banner';
import { VisuallyHidden } from 'govuk-react/visually-hidden';
import { z } from 'zod';
import type { ActionResult } from '../action-result';
import { fieldProps } from '../components/fields';
import { FormErrorSummary, useFailedSubmits } from '../components/FormErrorSummary';

export type TodosValue = z.infer<typeof todosSchema>;

type TodosFormProps = {
  action: string;
  id?: string;
  defaultValue: TodosValue | null;
  lastResult?: SubmissionResult<string[]> | null;
  saved?: boolean;
};

const todosSchema = coerceFormValue(
  z.object({
    title: z.string({ error: 'Enter a title' }),
    tasks: z
      .array(z.object({ content: z.string().optional(), completed: z.boolean().default(false) }))
      .min(1, 'Add at least one task')
      .superRefine((tasks, ctx) => {
        tasks.forEach((task, index) => {
          if (!task.content) {
            ctx.addIssue({
              code: 'custom',
              path: [index, 'content'],
              message: `Enter a description for task ${index + 1}`,
            });
          }
        });
      }),
  })
);

function createInMemoryStore<Type>() {
  const stores: Record<string, Type | null> = {};

  return {
    async getValue(id?: string) {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 150));
      return stores[id ?? ''] ?? null;
    },
    async setValue(value: Type, id?: string) {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
      stores[id ?? ''] = value;
    },
  };
}

const todosStore = createInMemoryStore<TodosValue>();

export async function getTodos(id?: string) {
  return todosStore.getValue(id);
}

export async function submitTodos(formData: FormData): Promise<ActionResult> {
  const id = formData.get('id')?.toString() || undefined;
  const submission = parseSubmission(formData);
  const { intent, targetValue } = resolveSubmission(submission);

  if (intent?.type !== 'submit') {
    // Without JavaScript, the add, remove and move buttons submit the form: apply them, but don't validate yet.
    return { success: false, result: report(submission, { targetValue }) };
  }

  const result = todosSchema.safeParse(targetValue);

  if (!result.success) {
    return { success: false, result: report(submission, { error: { issues: result.error.issues } }) };
  }

  await todosStore.setValue(result.data, id);

  return { success: true, result: report(submission, { reset: true, targetValue: result.data }) };
}

export function TodosForm({ action, id, defaultValue, lastResult, saved }: TodosFormProps) {
  const failedSubmits = useFailedSubmits();
  const { form, fields, intent } = useForm(todosSchema, {
    lastResult,
    defaultValue: defaultValue ?? { title: '', tasks: [{ content: '', completed: false }] },
    onError: failedSubmits.onError,
  });
  const tasks = fields.tasks.getFieldList();

  return (
    <GridRow>
      <GridColumn width="two-thirds">
        {saved && <NotificationBanner.Composite success heading="Your tasks have been saved" />}
        <FormErrorSummary form={form} failedSubmits={failedSubmits.count} />
        <Heading size="l" headingLevel={1}>
          Tasks
        </Heading>
        <form {...form.props} method="post" action={action}>
          {/* Pressing Enter in a field clicks the form's first rendered submit button, so make that Save. */}
          <VisuallyHidden aria-hidden>
            <button type="submit" tabIndex={-1}>
              Save
            </button>
          </VisuallyHidden>
          {id ? <input type="hidden" name="id" value={id} /> : null}
          <InputField label="Title" {...fieldProps(fields.title)} />
          {tasks.map((task, index) => {
            const taskFields = task.getFieldset();

            return (
              <Fieldset.Composite key={task.key} legend={`Task ${index + 1}`} legendSize="m">
                <InputField label="Description" {...fieldProps(taskFields.content)} />
                <FormGroup>
                  <Checkboxes.Root small>
                    <Checkboxes.ItemComposite
                      id={taskFields.completed.id}
                      name={taskFields.completed.name}
                      defaultChecked={taskFields.completed.defaultChecked}
                      label="Completed"
                    />
                  </Checkboxes.Root>
                </FormGroup>
                <ButtonGroup>
                  <Button
                    variant="secondary"
                    name={form.intentName}
                    value={intent.remove.serialize({ name: fields.tasks.name, index })}
                  >
                    Remove<VisuallyHidden> task {index + 1}</VisuallyHidden>
                  </Button>
                  {index > 0 && (
                    <Button
                      variant="secondary"
                      name={form.intentName}
                      value={intent.reorder.serialize({ name: fields.tasks.name, from: index, to: index - 1 })}
                    >
                      Move up<VisuallyHidden> task {index + 1}</VisuallyHidden>
                    </Button>
                  )}
                </ButtonGroup>
              </Fieldset.Composite>
            );
          })}
          <FormGroup error={Boolean(fields.tasks.errors)}>
            {fields.tasks.errors && <ErrorMessage id={fields.tasks.errorId}>{fields.tasks.errors[0]}</ErrorMessage>}
            <Button
              id={fields.tasks.id}
              variant="secondary"
              name={form.intentName}
              value={intent.insert.serialize({
                name: fields.tasks.name,
                defaultValue: { content: '', completed: false },
              })}
              aria-describedby={fields.tasks.errors ? fields.tasks.errorId : undefined}
            >
              Add another task
            </Button>
          </FormGroup>
          <Button>Save</Button>
        </form>
      </GridColumn>
    </GridRow>
  );
}
