import * as React from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/file-upload';
import * as Markup from 'govuk-frontend-react/file-upload';
import { ErrorMessageComposite } from 'govuk-frontend-react/error-message';
import { FormGroup } from 'govuk-frontend-react/form-group';
import { Hint } from 'govuk-frontend-react/hint';
import { LabelComposite } from 'govuk-frontend-react/label';

/*
 * govuk-frontend-react's FileUpload markup. `FileUploadField` is the native file input. `EnhancedFileUploadField` is
 * govuk-frontend's improved file upload, with behaviour from @govuk-react/primitives: without
 * JavaScript it's the native file input too, and once JavaScript runs it's a button and drop zone.
 */

export type FileUploadProps = Markup.FileUploadProps;

/** The file input. */
export function FileUpload(props: FileUploadProps) {
  return (
    <Primitives.Input asChild>
      <Markup.FileUpload {...props} />
    </Primitives.Input>
  );
}

type Texts = Pick<
  Markup.FileUploadWrapperProps,
  | 'chooseFilesButtonText'
  | 'noFileChosenText'
  | 'multipleFilesChosenText'
  | 'dropInstructionText'
  | 'enteredDropZoneText'
  | 'leftDropZoneText'
>;

export type FileUploadFieldProps = Omit<Markup.FileUploadFieldProps, 'javascript' | keyof Texts>;

/**
 * Help users select and upload a file.
 *
 * @see https://design-system.service.gov.uk/components/file-upload/
 */
export function FileUploadField(props: FileUploadFieldProps) {
  return <Markup.FileUploadField {...props} />;
}

export type EnhancedFileUploadProps = Omit<
  Primitives.RootProps,
  | 'noFileChosen'
  | 'multipleFilesChosen'
  | 'enteredDropZone'
  | 'leftDropZone'
  | 'emptyClass'
  | 'draggingClass'
  | 'disabledClass'
> &
  Pick<Texts, 'noFileChosenText' | 'multipleFilesChosenText' | 'enteredDropZoneText' | 'leftDropZoneText'>;

/** Holds `EnhancedFileUploadWrapper` and `EnhancedFileUploadAnnouncements`, and turns the file input into a button and drop zone once JavaScript runs. */
export function EnhancedFileUpload({
  noFileChosenText,
  multipleFilesChosenText,
  enteredDropZoneText,
  leftDropZoneText,
  ...props
}: EnhancedFileUploadProps) {
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

export type EnhancedFileUploadWrapperProps = Markup.FileUploadWrapperProps;

/** The drop zone, holding `EnhancedFileUploadButton` and `FileUpload`. */
export function EnhancedFileUploadWrapper(props: EnhancedFileUploadWrapperProps) {
  return (
    <Primitives.DropZone asChild>
      <Markup.FileUploadWrapper {...props} />
    </Primitives.DropZone>
  );
}

export type EnhancedFileUploadButtonProps = Omit<Primitives.ButtonProps, 'asChild'>;

/** Opens the file picker, and takes dropped files. Shown once JavaScript runs, before `FileUpload`. */
export function EnhancedFileUploadButton({ className, ...props }: EnhancedFileUploadButtonProps) {
  return <Primitives.Button className={clsx('govuk-file-upload-button', className)} {...props} />;
}

export type EnhancedFileUploadStatusProps = Omit<Primitives.StatusProps, 'asChild'>;

/** Which files are chosen, in `EnhancedFileUploadButton`. */
export function EnhancedFileUploadStatus({ className, ...props }: EnhancedFileUploadStatusProps) {
  return <Primitives.Status className={clsx('govuk-body', 'govuk-file-upload-button__status', className)} {...props} />;
}

export type EnhancedFileUploadCommaProps = Omit<Primitives.SeparatorProps, 'asChild'>;

/** A visually hidden comma between the label and the button's text in its accessible name, after `EnhancedFileUploadStatus`. */
export function EnhancedFileUploadComma({ className, ...props }: EnhancedFileUploadCommaProps) {
  return <Primitives.Separator className={clsx('govuk-visually-hidden', className)} {...props} />;
}

export type EnhancedFileUploadPseudoButtonContainerProps = React.ComponentProps<'span'>;

/** Holds `EnhancedFileUploadPseudoButton` and `EnhancedFileUploadInstruction`, in `EnhancedFileUploadButton`. */
export function EnhancedFileUploadPseudoButtonContainer({
  className,
  ...props
}: EnhancedFileUploadPseudoButtonContainerProps) {
  return <span className={clsx('govuk-file-upload-button__pseudo-button-container', className)} {...props} />;
}

export type EnhancedFileUploadPseudoButtonProps = React.ComponentProps<'span'>;

/** Looks like a secondary button. Defaults to "Choose file". */
export function EnhancedFileUploadPseudoButton({
  className,
  children = 'Choose file',
  ...props
}: EnhancedFileUploadPseudoButtonProps) {
  return (
    <span
      className={clsx('govuk-button', 'govuk-button--secondary', 'govuk-file-upload-button__pseudo-button', className)}
      {...props}
    >
      {children}
    </span>
  );
}

export type EnhancedFileUploadInstructionProps = React.ComponentProps<'span'>;

/** Tells users they can drop files. Defaults to "or drop file". */
export function EnhancedFileUploadInstruction({
  className,
  children = 'or drop file',
  ...props
}: EnhancedFileUploadInstructionProps) {
  return (
    <span className={clsx('govuk-body', 'govuk-file-upload-button__instruction', className)} {...props}>
      {children}
    </span>
  );
}

export type EnhancedFileUploadButtonCompositeProps = Omit<EnhancedFileUploadButtonProps, 'children'> &
  Pick<Texts, 'chooseFilesButtonText' | 'dropInstructionText'>;

/** `EnhancedFileUploadButton`, with its status and text. */
export function EnhancedFileUploadButtonComposite({
  chooseFilesButtonText,
  dropInstructionText,
  ...props
}: EnhancedFileUploadButtonCompositeProps) {
  return (
    <EnhancedFileUploadButton {...props}>
      <EnhancedFileUploadStatus />
      <EnhancedFileUploadComma />
      <EnhancedFileUploadPseudoButtonContainer>
        <EnhancedFileUploadPseudoButton>{chooseFilesButtonText}</EnhancedFileUploadPseudoButton>{' '}
        <EnhancedFileUploadInstruction>{dropInstructionText}</EnhancedFileUploadInstruction>
      </EnhancedFileUploadPseudoButtonContainer>
    </EnhancedFileUploadButton>
  );
}

export type EnhancedFileUploadAnnouncementsProps = Omit<Primitives.AnnouncementsProps, 'asChild'>;

/** Tells screen reader users when they drag files into or out of the drop zone, after `EnhancedFileUploadWrapper`. */
export function EnhancedFileUploadAnnouncements({ className, ...props }: EnhancedFileUploadAnnouncementsProps) {
  return (
    <Primitives.Announcements
      className={clsx('govuk-file-upload-announcements', 'govuk-visually-hidden', className)}
      {...props}
    />
  );
}

export type EnhancedFileUploadCompositeProps = FileUploadProps & Texts;

/** `EnhancedFileUpload`, with the drop zone, button, file input and announcements. Takes the file input's props. */
export function EnhancedFileUploadComposite({
  chooseFilesButtonText,
  noFileChosenText,
  multipleFilesChosenText,
  dropInstructionText,
  enteredDropZoneText,
  leftDropZoneText,
  ...props
}: EnhancedFileUploadCompositeProps) {
  return (
    <EnhancedFileUpload
      noFileChosenText={noFileChosenText}
      multipleFilesChosenText={multipleFilesChosenText}
      enteredDropZoneText={enteredDropZoneText}
      leftDropZoneText={leftDropZoneText}
    >
      <EnhancedFileUploadWrapper
        chooseFilesButtonText={chooseFilesButtonText}
        noFileChosenText={noFileChosenText}
        multipleFilesChosenText={multipleFilesChosenText}
        dropInstructionText={dropInstructionText}
        enteredDropZoneText={enteredDropZoneText}
        leftDropZoneText={leftDropZoneText}
      >
        <EnhancedFileUploadButtonComposite
          chooseFilesButtonText={chooseFilesButtonText}
          dropInstructionText={dropInstructionText}
        />
        <FileUpload {...props} />
      </EnhancedFileUploadWrapper>
      <EnhancedFileUploadAnnouncements />
    </EnhancedFileUpload>
  );
}

export type EnhancedFileUploadFieldProps = Omit<Markup.FileUploadFieldProps, 'javascript'>;

const isSet = (node: React.ReactNode) => node !== undefined && node !== null && node !== false && node !== '';

/**
 * Help users select and upload a file, by choosing it or dropping it on the field. This is
 * govuk-frontend's improved file upload. Without JavaScript it's a native file input.
 *
 * @see https://design-system.service.gov.uk/components/file-upload/#using-the-improved-file-upload-component
 */
export function EnhancedFileUploadField({
  id: idProp,
  name,
  label,
  labelSize,
  labelIsPageHeading,
  hint,
  errorMessage,
  'aria-describedby': describedBy,
  ...props
}: EnhancedFileUploadFieldProps) {
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
      <EnhancedFileUploadComposite
        id={id}
        name={name}
        error={Boolean(errorId)}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
    </FormGroup>
  );
}
