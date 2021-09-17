import { createGlobalStyle } from 'styled-components';

/**
 *
 * A Styled Component to apply global style for use with govuk-react.
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import GlobalStyle from '@govuk-react/global-style';
 *
 * const MyApp = () => <>
 *   <GlobalStyle />
 *   <div>Example</div>
 * </>
 * ```
 *
 * ### References:
 *
 * - https://styled-components.com/docs/api#createglobalstyle
 *
 */
export const GlobalStyle = createGlobalStyle`
 body {
   padding: 0;
   margin: 0;
   font-family: 'Inter UI', Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
`;

GlobalStyle.displayName = 'GlobalStyle';

export default GlobalStyle;
