import {
  MEDIA_QUERIES,
  SPACING_MAP,
  SPACING_MAP_INDEX,
  SPACING_POINTS,
} from '@govuk-react/constants';

import * as spacing from '.';

describe('spacing lib', () => {
  describe('simple', () => {
    it('returns spacing values from the spacing scale', () => {
      Object.keys(SPACING_POINTS).forEach((key) => {
        expect(spacing.simple(key)).toEqual(SPACING_POINTS[key]);
      });
    });

    it('throws when not given a size', () => {
      expect(() => spacing.simple()).toThrow();
    });

    it('throws when given a size not in the spacing scale', () => {
      expect(() => spacing.simple('test')).toThrow();
      expect(() => spacing.simple(99999)).toThrow();
    });
  });

  describe('responsive', () => {
    it('returns spacing styles for given sizes on the spacing scale', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        const style = spacing.responsive({ size, property: 'test' });

        expect(style).toEqual(expect.objectContaining({ test: SPACING_MAP[size].mobile }));
        expect(style[MEDIA_QUERIES.TABLET])
          .toEqual(expect.objectContaining({ test: SPACING_MAP[size].tablet }));
      });
    });

    it('throws when not given a size', () => {
      expect(() => spacing.responsive()).toThrow();
    });

    it('throws when not given a property', () => {
      expect(() => spacing.responsive({ size: 0 })).toThrow();
    });

    it('throws when given a size not in the spacing scale', () => {
      expect(() => spacing.responsive({ size: 'test' })).toThrow();
      expect(() => spacing.responsive({ size: 99999 })).toThrow();
    });

    it('returns spacing style for a given direction', () => {
      expect(spacing.responsive({ size: 0, property: 'test', direction: 'east' }))
        .toEqual(expect.objectContaining({ 'test-east': SPACING_MAP[0].mobile }));
    });

    it('returns spacing style for a given array of direction', () => {
      const style = spacing.responsive({ size: 0, property: 'test', direction: ['east', 'west'] });

      expect(style).toEqual(expect.objectContaining({
        'test-east': SPACING_MAP[0].mobile,
        'test-west': SPACING_MAP[0].mobile,
      }));
      expect(style[MEDIA_QUERIES.TABLET]).toEqual(expect.objectContaining({
        'test-east': SPACING_MAP[0].tablet,
        'test-west': SPACING_MAP[0].tablet,
      }));
    });

    it('treats all direction as no direction', () => {
      expect(spacing.responsive({ size: 0, property: 'test', direction: 'all' }))
        .toEqual(expect.objectContaining({ test: SPACING_MAP[0].mobile }));
    });

    it('treats all direction in a direction array as no direction', () => {
      const style = spacing.responsive({ size: 0, property: 'test', direction: ['all', 'west'] });

      expect(style).toEqual(expect.objectContaining({
        test: SPACING_MAP[0].mobile,
        'test-west': SPACING_MAP[0].mobile,
      }));
      expect(style[MEDIA_QUERIES.TABLET]).toEqual(expect.objectContaining({
        test: SPACING_MAP[0].tablet,
        'test-west': SPACING_MAP[0].tablet,
      }));
    });

    it('adjusts a spacing by the adjustment amount', () => {
      expect(spacing.responsive({ size: 0, property: 'test', adjustment: 7 }))
        .toEqual(expect.objectContaining({ test: SPACING_MAP[0].mobile + 7 }));
    });
  });

  describe('responsiveMargin', () => {
    it('returns margin styles for given sizes on the spacing scale', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        expect(spacing.responsiveMargin({ size })).toEqual(spacing.responsive({ size, property: 'margin' }));
      });
    });

    it('returns margin styles for given sizes on the spacing scale using simple numeric value', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        expect(spacing.responsiveMargin(size)).toEqual(spacing.responsive({ size, property: 'margin' }));
      });
    });
  });

  describe('responsivePadding', () => {
    it('returns padding styles for given sizes on the spacing scale', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        expect(spacing.responsivePadding({ size })).toEqual(spacing.responsive({ size, property: 'padding' }));
      });
    });

    it('returns padding styles for given sizes on the spacing scale using simple numeric value', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        expect(spacing.responsivePadding(size)).toEqual(spacing.responsive({ size, property: 'padding' }));
      });
    });
  });
});
