test('without React, an open property set before the element is defined still controls it', async () => {
  document.body.innerHTML =
    '<govuk-react-disclosure><button type="button" data-disclosure-trigger hidden>Menu</button><div data-disclosure-content id="menu">Navigation</div></govuk-react-disclosure>';
  const element = document.querySelector('govuk-react-disclosure');
  if (element) element.open = true;
  await import('./element.js');
  const button = document.querySelector('button');
  expect(button).toHaveAttribute('aria-expanded', 'true');
  button?.click();
  expect(button).toHaveAttribute('aria-expanded', 'true');
});
