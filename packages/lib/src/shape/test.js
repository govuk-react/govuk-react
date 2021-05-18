import * as shape from '.';

const directions = ['up', 'down', 'left', 'right'];

describe('shape lib', () => {
  describe('arrow', () => {
    it('throws when given an invalid direction', () => {
      expect(() => shape.arrow({ direction: 'broken' })).toThrow();
    });

    it('returns styles for an arrow for up/down/left/right directions', () => {
      directions.forEach((direction) => {
        expect(shape.arrow({ direction })).toBeTruthy();
      });
    });
  });
});
