import styled from 'styled-components'

const Example = styled.h1`
	font-family: Arial, sans-serif;
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

Example.defaultProps = {
	children: 'Default prop'
}

export default Example;
