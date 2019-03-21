import styled from 'styled-components';
import { link } from '@govuk-react/lib';
import { deprecate } from '@govuk-react/hoc';

const Link = styled('a')(link.common(), link.styleText);

Link.name = 'Breadcrumb.Link';

export default deprecate(Link, 'please use the Breadcrumbs.Link component instead');
