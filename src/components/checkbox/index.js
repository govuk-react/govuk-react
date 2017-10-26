// https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkbox/_checkbox.scss
import React from 'react'
import styled from 'styled-components'
import {css} from 'styled-components'

const Input = styled.input`

`;

const WrapperLabel = styled.label`
  display: block;
`;

const Checkbox = ({children, ...props}) => (
  <WrapperLabel>
    <Input type="checkbox" {...props} />
    {children}
  </WrapperLabel>
)

export default Checkbox;
