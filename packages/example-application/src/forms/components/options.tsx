import React from 'react';

export const nationalities = [
  { value: 'british', label: 'British', hint: 'including English, Scottish, Welsh and Northern Irish' },
  { value: 'irish', label: 'Irish' },
  { value: 'other', label: 'Citizen of another country' },
];

export const animalOptions = (
  <>
    <option value="">Please select...</option>
    <option value="cat">Cat</option>
    <option value="other-feline">Other feline</option>
    <option value="other-non-feline">Other non feline</option>
  </>
);
