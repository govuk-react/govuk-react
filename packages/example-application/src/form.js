import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [firstName, setFirstName] = useState();
  const [errors, setErrors] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    if (!firstName) {
      setErrors({ firstName: 'Please enter a first name' });
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    }
  }, [isSubmitting, firstName]);

  return (
    <>
      {!isSubmitted && (
        <GovUK.LoadingBox loading={isSubmitting}>
          <GovUK.BackLink as={Link} to="/">
            Home
          </GovUK.BackLink>
          <GovUK.Label mb={4}>
            <GovUK.LabelText>First name</GovUK.LabelText>
            <GovUK.HintText>You can find this written on your passport</GovUK.HintText>
            {errors?.firstName && <GovUK.ErrorText>{errors.firstName}</GovUK.ErrorText>}
            <GovUK.Input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </GovUK.Label>
          <GovUK.Button onClick={handleSubmit} disabled={isSubmitting}>
            Submit
          </GovUK.Button>
        </GovUK.LoadingBox>
      )}
      {isSubmitted && (
        <>
          <GovUK.BackLink as={Link} to="/form" onClick={() => setIsSubmitted(false)}>
            Back
          </GovUK.BackLink>
          <GovUK.Panel title="Application complete">
            Your name is <strong>{firstName}</strong>
          </GovUK.Panel>
          <GovUK.LeadParagraph>
            Enim pariatur pariatur commodo incididunt ad nulla ex eu sunt ut ex id veniam veniam.
          </GovUK.LeadParagraph>
          <GovUK.Paragraph>
            Consequat adipisicing aliquip eiusmod nostrud et proident non id consequat aliquip eiusmod aliquip.
          </GovUK.Paragraph>
        </>
      )}
    </>
  );
};

export default Form;
