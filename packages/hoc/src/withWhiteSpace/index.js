import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { SPACING_MAP, SPACING_MAP_INDEX, MEDIA_QUERIES } from '@govuk-react/constants';

const withWhiteSpace = (config = {}) => (Component) => {
  const StyledHoc = styled(Component)(({ mb: marginBottom = config.marginBottom }) => (
    marginBottom &&
      {
        marginBottom: marginBottom ? SPACING_MAP[marginBottom].mobile : 0,
        [MEDIA_QUERIES.LARGESCREEN]: {
          marginBottom: marginBottom ? SPACING_MAP[marginBottom].tablet : 0,
        },
      }
  ));


  // `mb` (Margin Bottom) prop name comes from the naming convention used by https://github.com/jxnblk/grid-styled
  StyledHoc.propTypes = {
    mb: PropTypes.oneOf(SPACING_MAP_INDEX),
  };

  return StyledHoc;
};

export default withWhiteSpace;

