import {
  FONT_STACK,
  FONT_STACK_PRINT,
  FONT_STACK_TABULAR,
  FONT_WEIGHTS,
  MEDIA_QUERIES,
  TYPOGRAPHY_SCALE,
} from '@govuk-react/constants';
import * as typography from '.';

describe('typography lib', () => {
  it('includes textColour', () => {
    expect(typography.textColour).toBeTruthy();
  });

  it('includes textColor alias for textColour', () => {
    expect(typography.textColor).toEqual(typography.textColour);
  });

  describe('common', () => {
    it('sets default font', () => {
      const result = typography.common();

      expect(result.fontFamily).toEqual(FONT_STACK);
      expect(result[MEDIA_QUERIES.PRINT]).toEqual({ fontFamily: FONT_STACK_PRINT });
    });

    it('allows an override fontFamily value', () => {
      const result = typography.common('test');

      expect(result.fontFamily).toEqual('test');
      expect(result[MEDIA_QUERIES.PRINT]).toEqual({ fontFamily: FONT_STACK_PRINT });
    });
  });

  describe('responsive', () => {
    it('allows any font size defined in the typography scale', () => {
      Object.keys(TYPOGRAPHY_SCALE).forEach((size) => {
        expect(() => typography.responsive(size)).not.toThrow();
      });
    });

    it('produces mobile-first sizes with definitions for tablet and print', () => {
      Object.entries(TYPOGRAPHY_SCALE).forEach(([size, scale]) => {
        const style = typography.responsive(size);

        expect(style.fontSize).toEqual(`${scale.mobile.fontSize}px`);
        expect(style[MEDIA_QUERIES.PRINT].fontSize).toEqual(`${scale.print.fontSize}px`);
        expect(style[MEDIA_QUERIES.TABLET].fontSize).toEqual(`${scale.tablet.fontSize}px`);

        expect(style.lineHeight).toEqual(scale.mobile.lineHeight);
        expect(style[MEDIA_QUERIES.PRINT].lineHeight).toEqual(scale.print.lineHeight);
        expect(style[MEDIA_QUERIES.TABLET].lineHeight).toEqual(scale.tablet.lineHeight);
      });
    });

    it('can override lineHeight', () => {
      Object.keys(TYPOGRAPHY_SCALE).forEach((size) => {
        const style = typography.responsive(size, 999);

        expect(style.lineHeight).toEqual(999);
        expect(style[MEDIA_QUERIES.PRINT].lineHeight).toEqual(999);
        expect(style[MEDIA_QUERIES.TABLET].lineHeight).toEqual(999);
      });
    });

    it('throws when not given a size', () => {
      expect(() => typography.responsive(undefined)).toThrow();
    });

    it('throws when given a size not in the typography scale', () => {
      expect(() => typography.responsive('test')).toThrow();
      expect(() => typography.responsive(99999)).toThrow();
    });
  });

  describe('font', () => {
    it('defaults to standard font, regular weight', () => {
      const style = typography.font();

      expect(style).toEqual({ ...typography.common(), fontWeight: FONT_WEIGHTS.regular });
    });

    it('can accept tabular flag to pick tabular font', () => {
      const style = typography.font({ tabular: true });

      expect(style.fontFamily).toEqual(FONT_STACK_TABULAR);
    });

    it('accepts weight values from FONT_WEIGHTS list', () => {
      Object.entries(FONT_WEIGHTS).forEach(([weight, value]) => {
        expect(typography.font({ weight }).fontWeight).toEqual(value);
      });
    });

    it('ignores weight values we do not support', () => {
      expect(typography.font({ weight: 'fooBar' }).fontWeight).toBeUndefined();
    });

    it('allows size and custom lineHeight to be set', () => {
      Object.keys(TYPOGRAPHY_SCALE).forEach((size) => {
        const style = typography.font({ size, lineHeight: 999 });

        expect(style).toEqual(expect.objectContaining(typography.responsive(size, 999)));
      });
    });
  });
});
