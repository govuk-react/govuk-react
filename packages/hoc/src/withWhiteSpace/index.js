import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { SPACING_MAP_INDEX } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

// references for sizing:
// https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_spacing.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/overrides/_spacing.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/settings/_spacing.scss

// `margin` and `padding` are supported as props and config values
// can be a single number, to indicate scale size to use in all directions
// can be an object in format `{ size, direction, adjustment }`
// - see `responsivePadding` and `responsiveMargin` calls
// can be an array of numbers/objects

const Directions = PropTypes.oneOf(['all', 'top', 'right', 'bottom', 'left']);

const SpacingShape = PropTypes.shape({
  size: PropTypes.number.isRequired,
  direction: PropTypes.oneOfType([Directions, PropTypes.arrayOf(Directions)]),
  adjustment: PropTypes.number,
});

const withWhiteSpace = (config = {}) => (Component) => {
  const StyledHoc = styled(Component)(
    ({ margin = config.margin }) => {
      if (margin !== undefined) {
        if (Array.isArray(margin)) {
          return margin.map(val => spacing.responsiveMargin(val));
        }
        return spacing.responsiveMargin(margin);
      }
      return undefined;
    },
    ({ padding = config.padding }) => {
      if (padding !== undefined) {
        if (Array.isArray(padding)) {
          return padding.map(val => spacing.responsivePadding(val));
        }
        return spacing.responsivePadding(padding);
      }
      return undefined;
    },
    ({ mb: marginBottom = config.marginBottom }) => (
      marginBottom !== undefined ? spacing.responsiveMargin({ size: marginBottom, direction: 'bottom' }) : undefined
    ),
  );

  // `mb` (Margin Bottom) prop name comes from the naming convention used by https://github.com/jxnblk/grid-styled
  StyledHoc.propTypes = {
    mb: PropTypes.oneOf(SPACING_MAP_INDEX),
    margin: PropTypes.oneOfType([
      PropTypes.number,
      SpacingShape,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, SpacingShape])),
    ]),
    padding: PropTypes.oneOfType([
      PropTypes.number,
      SpacingShape,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, SpacingShape])),
    ]),
  };

  return StyledHoc;
};

export default withWhiteSpace;
