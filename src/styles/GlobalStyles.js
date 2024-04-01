// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans Condensed Light';
    src: url('public/fonts/OpenSans-CondensedLight.ttf') format('truetype');
    
  }
  @font-face {
    font-family: 'Open Sans Condensed Bold';
    src: url('public/fonts/OpenSans-CondensedBold.ttf') format('truetype');
    
  }
`;

export default GlobalStyle;
