export const validateNationality = (value) => (value?.length ? undefined : 'Please select at least one nationality');
export const validateMultiplePets = (value) => (value ? undefined : 'Please answer the question');
export const validateFirstName = (value) => (value ? undefined : 'Please enter a first name');
export const validateDescription = (value) => (value ? undefined : 'Please enter a description');
export const validateDateOfBirth = (value) => (value ? undefined : 'Please enter a date of birth');
export const validateAnimal = (value) => (value ? undefined : 'Please select an animal');
export const validatePhoto = (value) => (value ? undefined : 'Please select a photo');
