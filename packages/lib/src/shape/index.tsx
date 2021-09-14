// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_shape-arrow.scss
const root3 = 1.732; // Math.sqrt(3);

function equilateralHeight(base) {
  return (base / 2) * root3;
}

function makeShape(
  direction: string,
  base: number,
  height: number
): {
  clipPath: string;
  borderWidth: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
  borderTopColor?: string;
} {
  const perpendicular = base / 2;

  switch (direction) {
    case 'up':
      return {
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        borderWidth: `0 ${perpendicular}px ${height}px ${perpendicular}px`,
        borderBottomColor: 'inherit',
      };
    case 'right':
      return {
        clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
        borderWidth: `${perpendicular}px 0 ${perpendicular}px ${height}px`,
        borderLeftColor: 'inherit',
      };
    case 'down':
      return {
        clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
        borderWidth: `${height}px ${perpendicular}px 0 ${perpendicular}px`,
        borderTopColor: 'inherit',
      };
    case 'left':
      return {
        clipPath: 'polygon(0% 50%, 100% 100%, 100% 0%)',
        borderWidth: `${perpendicular}px ${height}px ${perpendicular}px 0`,
        borderRightColor: 'inherit',
      };
    default:
      throw Error(`Invalid arrow direction: expected 'up', 'right', 'down' or 'left', got ${direction}`);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function arrow({
  direction,
  base = 0,
  height = equilateralHeight(base),
  display = 'block',
}: {
  direction: string;
  base?: number;
  height?: number;
  display?: string;
}): {
  display: string;
  width: number;
  height: number;
  borderStyle: string;
  borderColor: string;
  clipPath: string;
  borderWidth: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderTopColor?: string;
} {
  return {
    display,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderColor: 'transparent',

    ...makeShape(direction, base, height),
  };
}
