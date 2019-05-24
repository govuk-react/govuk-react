import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const MetaItem = styled('div')(
  {
    marginRight: GUTTER_HALF,
    marginBottom: spacing.simple(5),
    marginLeft: GUTTER_HALF,
  },
  ({ grow }) =>
    grow && {
      flex: 1,
      flexBasis: '320px',
<<<<<<< HEAD
      [MEDIA_QUERIES.DESKTOP]: {
        flexBasis: 0,
=======
      [MEDIA_QUERIES.TABLET]: {
        flexBasis: 'auto',
>>>>>>> Footer component (#651)
      },
    }
);

MetaItem.propTypes = {
  grow: PropTypes.bool,
};

MetaItem.defaultProps = {
  grow: false,
};

export default MetaItem;
