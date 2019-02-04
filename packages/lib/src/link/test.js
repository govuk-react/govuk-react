import { FOCUSABLE_FILL } from '@govuk-react/constants';
import * as link from '.';
import * as typography from '../typography';

describe('link lib', () => {
  describe('common', () => {
    it('produces a style array that includes FOCUSABLE_FILL', () => {
      const result = link.common();

      expect(result).toContain(FOCUSABLE_FILL);
    });

    it('produces a style array that sets default font', () => {
      const result = link.common();

      expect(result).toContainEqual(typography.common());
    });

    it('produces a style array that allows an override fontFamily value', () => {
      const result = link.common('test');

      expect(result).toContainEqual(typography.common('test'));
    });
  });

  it('includes styleDefault', () => {
    expect(link.styleDefault).toBeTruthy();
  });

  it('includes styleMuted', () => {
    expect(link.styleMuted).toBeTruthy();
  });

  it('includes styleText', () => {
    expect(link.styleText).toBeTruthy();
  });

  it('includes printFriendly', () => {
    expect(link.printFriendly).toBeTruthy();
  });
});
