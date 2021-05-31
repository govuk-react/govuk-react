import visuallyHidden, { focusable } from '.';

describe('visuallyHidden lib', () => {
  describe('visuallyHidden', () => {
    it('produces a style declaration', () => {
      const style = visuallyHidden();

      expect(style).toBeTruthy();
      expect(style).toBeInstanceOf(Object);
    });

    it('produces styles which, by default, are marked as important', () => {
      const style = visuallyHidden();

      Object.values(style).forEach((value) => {
        expect(value).toContain(' !important');
      });
    });

    it('can produce styles that do not contain important', () => {
      const style = visuallyHidden({ important: false });

      Object.values(style).forEach((value) => {
        expect(value).not.toContain('!important');
      });
    });
  });

  describe('visuallyHidden.focusable', () => {
    it('produces a style declaration, with focus and active styles', () => {
      const style = focusable();

      expect(style).toBeTruthy();
      expect(style).toBeInstanceOf(Object);

      const hasStyles = Object.keys(style).some((key) =>
        [':focus', ':active'].some((checkKey) => key.includes(checkKey))
      );

      expect(hasStyles).toBe(true);
    });

    it('produces styles which, by default, are marked as important', () => {
      const style = visuallyHidden();

      Object.entries(style).forEach(([key, value]) => {
        if ([':focus', ':active'].some((checkKey) => key.includes(checkKey))) {
          Object.values(value).forEach((activeValue) => {
            expect(activeValue).toContain(' !important');
          });
        } else {
          expect(value).toContain(' !important');
        }
      });
    });

    it('can produce styles that do not contain important', () => {
      const style = visuallyHidden({ important: false });

      Object.entries(style).forEach(([key, value]) => {
        if ([':focus', ':active'].some((checkKey) => key.includes(checkKey))) {
          Object.values(value).forEach((activeValue) => {
            expect(activeValue).not.toContain(' !important');
          });
        } else {
          expect(value).not.toContain(' !important');
        }
      });
    });
  });
});
