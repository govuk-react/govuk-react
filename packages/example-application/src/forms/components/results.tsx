import React, { useState, useEffect } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

const Results: React.FC<ResultsProps> = ({
  backLink,
  onBackClick,
  firstName,
  description,
  nationality,
  dob,
  animal,
  hasMultiplePets,
  petPhoto,
  petPhotoString,
}: ResultsProps) => {
  const [photoString, setPhotoString] = useState<string>(petPhotoString);
  useEffect(() => {
    if (petPhoto && petPhoto[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setPhotoString(reader.result as string);
      });
      reader.readAsDataURL(petPhoto[0]);
    }
  }, [petPhoto]);

  return (
    <>
      <GovUK.BackLink as={Link} to={backLink} onClick={onBackClick}>
        Back
      </GovUK.BackLink>
      <GovUK.Panel title="Application complete">Reference: XBR1N21R3</GovUK.Panel>
      <GovUK.LeadParagraph>
        Enim pariatur pariatur commodo incididunt ad nulla ex eu sunt ut ex id veniam veniam.
      </GovUK.LeadParagraph>
      <GovUK.Paragraph>
        Consequat adipisicing aliquip eiusmod nostrud et proident non id consequat aliquip eiusmod aliquip.
      </GovUK.Paragraph>
      <GovUK.UnorderedList>
        <GovUK.ListItem>Name: {firstName}</GovUK.ListItem>
        <GovUK.ListItem>Description: {description}</GovUK.ListItem>
        <GovUK.ListItem>Nationality: {nationality?.join(', ')}</GovUK.ListItem>
        <GovUK.ListItem>
          Date of birth: {dob?.day}/{dob?.month}/{dob?.year}
        </GovUK.ListItem>
        <GovUK.ListItem>Animal: {animal}</GovUK.ListItem>
        <GovUK.ListItem>Multiple pets: {hasMultiplePets}</GovUK.ListItem>
        <GovUK.ListItem>Pet photo: {photoString && <img alt="Your pet" src={photoString} />}</GovUK.ListItem>
      </GovUK.UnorderedList>
    </>
  );
};

interface ResultsProps {
  backLink: string;
  onBackClick(): void;
  firstName: string;
  description: string;
  nationality: string[];
  dob: {
    year?: string | number;
    month?: string | number;
    day?: string | number;
  };
  animal: string;
  hasMultiplePets: string;
  petPhoto?: FileList;
  petPhotoString?: string;
}

Results.defaultProps = {
  petPhoto: undefined,
  petPhotoString: undefined,
};

export default Results;
