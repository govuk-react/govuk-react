import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { SPACING_MAP, SPACING_MAP_INDEX, MEDIA_QUERIES } from '@govuk-react/constants';

// TODO add support for other white-space options
// and also `adjustment` value (e.g. see Button)
// https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_spacing.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/overrides/_spacing.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/settings/_spacing.scss

const withWhiteSpace = (config = {}) => (Component) => {
  const StyledHoc = styled(Component)(({ mb: marginBottom = config.marginBottom }) => (
    marginBottom !== undefined ? {
      marginBottom: marginBottom ? SPACING_MAP[marginBottom].mobile : 0,
      [MEDIA_QUERIES.LARGESCREEN]: {
        marginBottom: marginBottom ? SPACING_MAP[marginBottom].tablet : 0,
      },
    } : undefined
  ));

  // `mb` (Margin Bottom) prop name comes from the naming convention used by https://github.com/jxnblk/grid-styled
  StyledHoc.propTypes = {
    mb: PropTypes.oneOf(SPACING_MAP_INDEX),
  };

  return StyledHoc;
};

export default withWhiteSpace;
