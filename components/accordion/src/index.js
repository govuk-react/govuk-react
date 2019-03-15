import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';

import Group from './molecules/Group';
import Icon from './atoms/Icon';
import OpenAll from './atoms/OpenAll';
import SectionButton from './atoms/SectionButton';
import SectionContent from './atoms/SectionContent';
import SectionHeader from './atoms/SectionHeader';
import SectionHeading from './atoms/SectionHeading';
import SectionSummary from './atoms/SectionSummary';

const AccordionContainer = styled('div')(
  spacing.responsive({ size: 6, property: 'margin', direction: 'bottom' }),
  {
    borderBottom: `1px solid ${BORDER_COLOUR}`,
  },
  spacing.withWhiteSpace(),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 *
 * import Accordion from '@govuk-react/accordion'
 *
 * const checkOpen = state => Object.values(state).every(Boolean);
 *
 * class AccordionComponent extends React.Component {
 *   constructor() {
 *     this.state = {
 *       accordions: {
 *         accordionOne: false,
 *         accordionTwo: false,
 *         accordionThree: false,
 *         accordionFour: false,
 *       },
 *       isAllOpen: false,
 *     };
 *     this.individualAccordionSetState = this.individualAccordionSetState.bind(this);
 *     this.toggleAll = this.toggleAll.bind(this);
 *   }
 *
 *   componentDidUpdate() {
 *     return this.setState(({ accordions }) => ({
 *       isAllOpen: checkOpen(accordions),
 *     }));
 *   }
 *
 *   function toggleAll() {
 *     return this.setState(({ accordions, isAllOpen }) =>
 *       Object.entries(accordions).reduce(
 *         (prev, [key]) => ({
 *           ...prev,
 *           [key]: isAllOpen,
 *         }),
 *         {},
 *       );
 *     )
 *   }
 *
 *   function individualAccordionSetState(property) {
 *      return () => this.setState({
 *        [property]: !state[property],
 *      });
 *   }
 *
 *   render() {
 *     const { accordions, isAllOpen } = this.props;
 *     return (
 *       <Accordion>
 *         <Accordion.OpenAll href="#" onClick={this.toggleAll}>
 *           {`${isAllOpen ? 'Close' : 'Open'} all`}
 *         </Accordion.OpenAll>
 *         <Accordion.Group
 *           heading="Writing well for the web"
 *           expanded={accordions.accordionOne}
 *           onClick={this.individualAccordionSetState('accordionOne')}
 *         >
 *           <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
 *         </Accordion.Group>
 *         <Accordion.Group
 *           heading="Writing well for specialists"
 *           expanded={accordions.accordionTwo}
 *           onClick={this.individualAccordionSetState('accordionTwo')}
 *         >
 *           <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
 *         </Accordion.Group>
 *         <Accordion.Group
 *           heading="Know your audience"
 *           expanded={accordions.accordionThree}
 *           onClick={this.individualAccordionSetState('accordionThree')}
 *         >
 *           <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
 *         </Accordion.Group>
 *         <Accordion.Group
 *           heading="How people read"
 *           expanded={accordions.accordionFour}
 *           onClick={this.individualAccordionSetState('accordionFour')}
 *         >
 *           <Paragraph mb={0}>This is the content for How people read.</Paragraph>
 *         </Accordion.Group>
 *       </Accordion>
 *     );
 *   }
 * }
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/accordion
 * - https://design-system.service.gov.uk/components/accordion/
 */
const Accordion = props => <AccordionContainer {...props} />;

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Group = Group;
Accordion.Icon = Icon;
Accordion.OpenAll = OpenAll;
Accordion.SectionButton = SectionButton;
Accordion.SectionContent = SectionContent;
Accordion.SectionHeader = SectionHeader;
Accordion.SectionHeading = SectionHeading;
Accordion.SectionSummary = SectionSummary;

export default Accordion;
