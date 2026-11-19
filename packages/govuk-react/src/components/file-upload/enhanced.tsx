import * as React from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/file-upload';
import * as Markup from 'govuk-frontend-react/file-upload';
import { ErrorMessageComposite } from 'govuk-frontend-react/error-message';
import { FormGroup } from 'govuk-frontend-react/form-group';
import { Hint } from 'govuk-frontend-react/hint';
import { LabelComposite } from 'govuk-frontend-react/label';
import { FileUpload, type FileUploadProps, type FileUploadTexts } from './control';

export type RootProps = Omit<
  Primitives.RootProps,
  | 'noFileChosen'
  | 'multipleFilesChosen'
  | 'enteredDropZone'
  | 'leftDropZone'
  | 'emptyClass'
  | 'draggingClass'
  | 'disabledClass'
> &
  Pick<FileUploadTexts, 'noFileChosenText' | 'multipleFilesChosenText' | 'enteredDropZoneText' | 'leftDropZoneText'>;

/** Holds `Wrapper` and `Announcements`, and turns the file input into a button and drop zone once JavaScript runs. */
export function Root({
  noFileChosenText,
  multipleFilesChosenText,
  enteredDropZoneText,
  leftDropZoneText,
  ...props
}: RootProps) {
  return (
    <Primitives.Root
      noFileChosen={noFileChosenText}
      multipleFilesChosen={multipleFilesChosenText}
      enteredDropZone={enteredDropZoneText}
      leftDropZone={leftDropZoneText}
      emptyClass="govuk-file-upload-button--empty"
      draggingClass="govuk-file-upload-button--dragging"
      disabledClass="govuk-file-upload-wrapper--disabled"
      {...props}
    />
  );
}

export type WrapperProps = Markup.FileUploadWrapperProps;

/** The drop zone, holding `Button` and `FileUpload`. */
export function Wrapper(props: WrapperProps) {
  return (
    <Primitives.DropZone asChild>
      <Markup.FileUploadWrapper {...props} />
    </Primitives.DropZone>
  );
}

export type ButtonProps = Omit<Primitives.ButtonProps, 'asChild'>;

/** Opens the file picker, and takes dropped files. Shown once JavaScript runs, before `FileUpload`. */
export function Button({ className, ...props }: ButtonProps) {
  return <Primitives.Button className={clsx('govuk-file-upload-button', className)} {...props} />;
}

export type StatusProps = Omit<Primitives.StatusProps, 'asChild'>;

/** Which files are chosen, in `Button`. */
export function Status({ className, ...props }: StatusProps) {
  return <Primitives.Status className={clsx('govuk-body', 'govuk-file-upload-button__status', className)} {...props} />;
}

export type CommaProps = Omit<Primitives.SeparatorProps, 'asChild'>;

/** A visually hidden comma between the label and the button's text in its accessible name, after `Status`. */
export function Comma({ className, ...props }: CommaProps) {
  return <Primitives.Separator className={clsx('govuk-visually-hidden', className)} {...props} />;
}

export type PseudoButtonContainerProps = React.ComponentProps<'span'>;

/** Holds `PseudoButton` and `Instruction`, in `Button`. */
export function PseudoButtonContainer({ className, ...props }: PseudoButtonContainerProps) {
  return <span className={clsx('govuk-file-upload-button__pseudo-button-container', className)} {...props} />;
}

export type PseudoButtonProps = React.ComponentProps<'span'>;

/** Looks like a secondary button. Defaults to "Choose file". */
export function PseudoButton({ className, children = 'Choose file', ...props }: PseudoButtonProps) {
  return (
    <span
      className={clsx('govuk-button', 'govuk-button--secondary', 'govuk-file-upload-button__pseudo-button', className)}
      {...props}
    >
      {children}
    </span>
  );
}

export type InstructionProps = React.ComponentProps<'span'>;

/** Tells users they can drop files. Defaults to "or drop file". */
export function Instruction({ className, children = 'or drop file', ...props }: InstructionProps) {
  return (
    <span className={clsx('govuk-body', 'govuk-file-upload-button__instruction', className)} {...props}>
      {children}
    </span>
  );
}

export type ButtonCompositeProps = Omit<ButtonProps, 'children'> &
  Pick<FileUploadTexts, 'chooseFilesButtonText' | 'dropInstructionText'>;

/** `Button`, with its status and text. */
export function ButtonComposite({ chooseFilesButtonText, dropInstructionText, ...props }: ButtonCompositeProps) {
  return (
    <Button {...props}>
      <Status />
      <Comma />
      <PseudoButtonContainer>
        <PseudoButton>{chooseFilesButtonText}</PseudoButton> <Instruction>{dropInstructionText}</Instruction>
      </PseudoButtonContainer>
    </Button>
  );
}

export type AnnouncementsProps = Omit<Primitives.AnnouncementsProps, 'asChild'>;

/** Tells screen reader users when they drag files into or out of the drop zone, after `Wrapper`. */
export function Announcements({ className, ...props }: AnnouncementsProps) {
  return (
    <Primitives.Announcements
      className={clsx('govuk-file-upload-announcements', 'govuk-visually-hidden', className)}
      {...props}
    />
  );
}

export type CompositeProps = FileUploadProps & FileUploadTexts;

/** `Root`, with the drop zone, button, file input and announcements. Takes the file input's props. */
export function Composite({
  chooseFilesButtonText,
  noFileChosenText,
  multipleFilesChosenText,
  dropInstructionText,
  enteredDropZoneText,
  leftDropZoneText,
  ...props
}: CompositeProps) {
  return (
    <Root
      noFileChosenText={noFileChosenText}
      multipleFilesChosenText={multipleFilesChosenText}
      enteredDropZoneText={enteredDropZoneText}
      leftDropZoneText={leftDropZoneText}
    >
      <Wrapper
        chooseFilesButtonText={chooseFilesButtonText}
        noFileChosenText={noFileChosenText}
        multipleFilesChosenText={multipleFilesChosenText}
        dropInstructionText={dropInstructionText}
        enteredDropZoneText={enteredDropZoneText}
        leftDropZoneText={leftDropZoneText}
      >
        <ButtonComposite chooseFilesButtonText={chooseFilesButtonText} dropInstructionText={dropInstructionText} />
        <FileUpload {...props} />
      </Wrapper>
      <Announcements />
    </Root>
  );
}

export type FieldProps = Omit<Markup.FileUploadFieldProps, 'javascript'>;

const isSet = (node: React.ReactNode) => node !== undefined && node !== null && node !== false && node !== '';

/**
 * Help users select and upload a file, by choosing it or dropping it on the field. This is
 * govuk-frontend's improved file upload. Without JavaScript it's a native file input.
 *
 * @see https://design-system.service.gov.uk/components/file-upload/#using-the-improved-file-upload-component
 */
export function Field({
  id: idProp,
  name,
  label,
  labelSize,
  labelIsPageHeading,
  hint,
  errorMessage,
  'aria-describedby': describedBy,
  ...props
}: FieldProps) {
  const id = idProp || name;
  const hintId = isSet(hint) ? `${id}-hint` : undefined;
  const errorId = isSet(errorMessage) ? `${id}-error` : undefined;
  const ariaDescribedBy = [describedBy, hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <FormGroup error={Boolean(errorId)}>
      {/* The id govuk-frontend gives the label, which names the button. */}
      <LabelComposite id={`${id}-label`} htmlFor={id} size={labelSize} isPageHeading={labelIsPageHeading}>
        {label}
      </LabelComposite>
      {hintId && <Hint id={hintId}>{hint}</Hint>}
      {errorId && <ErrorMessageComposite id={errorId}>{errorMessage}</ErrorMessageComposite>}
      <Composite id={id} name={name} error={Boolean(errorId)} aria-describedby={ariaDescribedBy} {...props} />
    </FormGroup>
  );
}
