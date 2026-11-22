import * as CharacterCount from 'govuk-react/character-count';

/** A character count, which counts as the user types once React hydrates. */
export function FeedbackField() {
  return (
    <CharacterCount.Field
      id="feedback"
      name="feedback"
      label="Can you provide more detail?"
      labelSize="m"
      hint="Do not include personal or financial information."
      maxLength={200}
    />
  );
}
