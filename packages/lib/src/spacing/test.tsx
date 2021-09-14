import { MEDIA_QUERIES, SPACING_MAP, SPACING_MAP_INDEX, SPACING_POINTS, WIDTHS } from '@govuk-react/constants';

import * as spacing from '.';

describe('spacing lib', () => {
  describe('simple', () => {
    it('returns spacing values from the spacing scale', () => {
      Object.keys(SPACING_POINTS).forEach((key) => {
        expect(spacing.simple(Number(key))).toEqual(SPACING_POINTS[key]);
      });
    });

    it('returns negative spacing values from the spacing scale', () => {
      Object.keys(SPACING_POINTS).forEach((key) => {
        // skip zero, as -0 !== 0 in JS
        if (`${key}` !== '0') {
          expect(spacing.simple(-key)).toEqual(-SPACING_POINTS[key]);
        }
      });
    });

    it('throws when not given a size', () => {
      expect(() => spacing.simple(undefined)).toThrow();
    });

    it('throws when given a size not in the spacing scale', () => {
      expect(() => spacing.simple(99999)).toThrow();
    });
  });

  describe('responsive', () => {
    it('returns spacing styles for given sizes on the spacing scale', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        const style = spacing.responsive({ size, property: 'test' });

        expect(style).toEqual(expect.objectContaining({ test: SPACING_MAP[size].mobile }));
        expect(style[MEDIA_QUERIES.TABLET]).toEqual(expect.objectContaining({ test: SPACING_MAP[size].tablet }));
      });
    });

    it('returns negative spacing styles for given sizes on the spacing scale', () => {
      SPACING_MAP_INDEX.forEach((size) => {
        // skip zero, as -0 !== 0 in JS
        if (size !== 0) {
          const style = spacing.responsive({ size: -size, property: 'test' });

          expect(style).toEqual(expect.objectContaining({ test: -SPACING_MAP[size].mobile }));
          expect(style[MEDIA_QUERIES.TABLET]).toEqual(expect.objectContaining({ test: -SPACING_MAP[size].tablet }));
        }
      });
    });

    it('throws when not given a size', () => {
      expect(() => spacing.responsive(undefined)).toThrow();
    });

    it('throws when not given a property', () => {
      expect(() => spacing.responsive({ size: 0, property: undefined })).toThrow();
    });

    it('throws when given a size not in the spacing scale', () => {
      expect(() => spacing.responsive({ size: 99999, property: undefined })).toThrow();
    });

    it('returns spacing style for a given direction', () => {
      expect(spacing.responsive({ size: 0, property: 'test', direction: 'east' })).toEqual(
        expect.objectContaining({ 'test-east': SPACING_MAP[0].mobile })
      );
    });

    it('returns spacing style for a given array of direction', () => {
      const style = spacing.responsive({
        size: 0,
        property: 'test',
        direction: ['east', 'west'],
      });

      expect(style).toEqual(
        expect.objectContaining({
          'test-east': SPACING_MAP[0].mobile,
          'test-west': SPACING_MAP[0].mobile,
        })
      );
      expect(style[MEDIA_QUERIES.TABLET]).toEqual(
        expect.objectContaining({
          'test-east': SPACING_MAP[0].tablet,
          'test-west': SPACING_MAP[0].tablet,
        })
      );
    });

    it('treats all direction as no direction', () => {
      expect(spacing.responsive({ size: 0, property: 'test', direction: 'all' })).toEqual(
        expect.objectContaining({ test: SPACING_MAP[0].mobile })
      );
    });

    it('treats all direction in a direction array as no direction', () => {
      const style = spacing.responsive({
        size: 0,
        property: 'test',
        direction: ['all', 'west'],
      });

      expect(style).toEqual(
        expect.objectContaining({
          test: SPACING_MAP[0].mobile,
          'test-west': SPACING_MAP[0].mobile,
        })
      );
      expect(style[MEDIA_QUERIES.TABLET]).toEqual(
        expect.objectContaining({
          test: SPACING_MAP[0].tablet,
          'test-west': SPACING_MAP[0].tablet,
        })
      );
    });

    it('adjusts a spacing by the adjustment amount', () => {
      expect(spacing.responsive({ size: 0, property: 'test', adjustment: 7 })).toEqual(
        expect.objectContaining({ test: SPACING_MAP[0].mobile + 7 })
      );
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

  describe('withWhiteSpace', () => {
    it('generates an executable white-space styling function with no config', () => {
      const whiteSpaceFunc = spacing.withWhiteSpace();

      expect(() => whiteSpaceFunc()).not.toThrow();
    });

    describe('marginBottom/mb config and props', () => {
      it('works with marginBottom config', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({ marginBottom: 2 });

        expect(whiteSpaceFunc()).toEqual(
          expect.arrayContaining([expect.objectContaining({ 'margin-bottom': SPACING_MAP[2].mobile })])
        );
      });

      it('when marginBottom config set, mb prop changes marginBottom', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({ marginBottom: 2 });

        expect(whiteSpaceFunc({ mb: 4 })).toEqual(
          expect.arrayContaining([expect.objectContaining({ 'margin-bottom': SPACING_MAP[4].mobile })])
        );
      });

      it('when no marginBottom config set, mb prop changes marginBottom', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace();

        expect(whiteSpaceFunc({ mb: 4 })).toEqual(
          expect.arrayContaining([expect.objectContaining({ 'margin-bottom': SPACING_MAP[4].mobile })])
        );
      });
    });

    describe('margin config/props', () => {
      it('works with simple margin config value', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({ margin: 4 });

        expect(whiteSpaceFunc()).toEqual(
          expect.arrayContaining([expect.objectContaining({ margin: SPACING_MAP[4].mobile })])
        );
      });

      it('accepts a margin prop to override config', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({ margin: 1 });

        expect(whiteSpaceFunc({ margin: 4 })).toEqual(
          expect.arrayContaining([expect.objectContaining({ margin: SPACING_MAP[4].mobile })])
        );
      });

      it('accepts an array of margins', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({
          margin: [1, { direction: 'top', size: 3 }],
        });

        // styles need to be flattened for checking
        const result = [].concat(...whiteSpaceFunc());

        expect(result).toEqual(expect.arrayContaining([expect.objectContaining({ margin: SPACING_MAP[1].mobile })]));

        expect(result).toEqual(
          expect.arrayContaining([expect.objectContaining({ 'margin-top': SPACING_MAP[3].mobile })])
        );
      });
    });

    describe('padding config/props', () => {
      it('works with simple padding config value', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({ padding: 4 });

        expect(whiteSpaceFunc()).toEqual(
          expect.arrayContaining([expect.objectContaining({ padding: SPACING_MAP[4].mobile })])
        );
      });

      it('accepts a padding prop to override config', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({ padding: 1 });

        expect(whiteSpaceFunc({ padding: 4 })).toEqual(
          expect.arrayContaining([expect.objectContaining({ padding: SPACING_MAP[4].mobile })])
        );
      });

      it('accepts an array of paddings', () => {
        const whiteSpaceFunc = spacing.withWhiteSpace({
          padding: [1, { direction: 'top', size: 3 }],
        });

        // styles need to be flattened for checking
        const result = [].concat(...whiteSpaceFunc());

        expect(result).toEqual(expect.arrayContaining([expect.objectContaining({ padding: SPACING_MAP[1].mobile })]));

        expect(result).toEqual(
          expect.arrayContaining([expect.objectContaining({ 'padding-top': SPACING_MAP[3].mobile })])
        );
      });
    });
  });

  describe('withWidth', () => {
    it('generates an executable styling function with no config', () => {
      const widthFunc = spacing.withWidth();

      expect(() => widthFunc()).not.toThrow();
    });

    it('creates no style when config/prop not provided', () => {
      const widthFunc = spacing.withWidth();

      expect(widthFunc()).toBeUndefined();
    });

    it('accepts a width config value of a size string', () => {
      Object.entries(WIDTHS).forEach(([width, value]) => {
        const widthFunc = spacing.withWidth({ width });
        const widthStyle = widthFunc();

        expect(widthStyle).toEqual(
          expect.objectContaining({
            width: '100%',
            [MEDIA_QUERIES.TABLET]: { width: value },
          })
        );
      });
    });

    it('accepts a setWidth prop', () => {
      const widthFunc = spacing.withWidth();

      ['95%', '200px'].forEach((setWidth) => {
        const widthStyle = widthFunc({ setWidth });

        expect(widthStyle).toEqual(
          expect.objectContaining({
            width: '100%',
            [MEDIA_QUERIES.TABLET]: { width: setWidth },
          })
        );
      });

      Object.entries(WIDTHS).forEach(([setWidth, value]) => {
        const widthStyle = widthFunc({ setWidth });

        expect(widthStyle).toEqual(
          expect.objectContaining({
            width: '100%',
            [MEDIA_QUERIES.TABLET]: { width: value },
          })
        );
      });
    });

    it('accepts a setWidth prop to override a width config', () => {
      const widthFunc = spacing.withWidth({ width: Object.keys(WIDTHS)[0] });

      expect(widthFunc()).toEqual(
        expect.objectContaining({
          width: '100%',
          [MEDIA_QUERIES.TABLET]: { width: Object.values(WIDTHS)[0] },
        })
      );

      ['95%', '200px'].forEach((setWidth) => {
        const widthStyle = widthFunc({ setWidth });

        expect(widthStyle).toEqual(
          expect.objectContaining({
            width: '100%',
            [MEDIA_QUERIES.TABLET]: { width: setWidth },
          })
        );
      });

      Object.entries(WIDTHS).forEach(([setWidth, value]) => {
        const widthStyle = widthFunc({ setWidth });

        expect(widthStyle).toEqual(
          expect.objectContaining({
            width: '100%',
            [MEDIA_QUERIES.TABLET]: { width: value },
          })
        );
      });
    });

    it('accepts a noDefault config which removes default 100% width', () => {
      const widthFunc = spacing.withWidth({ noDefault: true });

      ['95%', '200px'].forEach((setWidth) => {
        const widthStyle = widthFunc({ setWidth });

        expect(widthStyle).not.toEqual(
          expect.objectContaining({
            width: '100%',
          })
        );
      });

      Object.values(WIDTHS).forEach((setWidth) => {
        const widthStyle = widthFunc({ setWidth });

        expect(widthStyle).not.toEqual(
          expect.objectContaining({
            width: '100%',
          })
        );
      });
    });
  });
});
