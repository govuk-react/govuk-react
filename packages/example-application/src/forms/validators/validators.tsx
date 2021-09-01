export const validateNationality = (value) => (value?.length ? undefined : 'Please select at least one nationality');
export const validateMultiplePets = (value) => (value ? undefined : 'Please let us know if you have multiple pets');
export const validateFirstName = (value) => (value ? undefined : 'Please enter a first name');
export const validateDescription = (value) => (value ? undefined : 'Please enter a description');
export const validateDateOfBirth = (value) => {
  if (value && value.year && value.month && value.day) {
    const year = Number(value.year);
    const month = Number(value.month) - 1;
    const day = Number(value.day);
    const testDate = new Date(year, month, day);
    if (
      // Check date is in the past
      testDate < new Date() &&
      // Is after 1900
      testDate.getFullYear() > 1900 &&
      // and a real date resolves to the inputted date (e.g. month is not 13, not 29th February on a non leap year)
      testDate.getFullYear() === year &&
      testDate.getMonth() === month &&
      testDate.getDate() === day
    ) {
      return undefined;
    }
  }
  return 'Please enter a date of birth';
};
export const validateAnimal = (value) => (value ? undefined : 'Please select an animal');
export const validatePetPhoto = (file) =>
  file && file.length === 1 && ['image/jpeg', 'image/png'].includes(file[0].type)
    ? undefined
    : 'Please select a valid photo';
