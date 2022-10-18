import {createGlobalStyle} from 'styled-components';
import { veryLightGray } from './UI/variaveis';


export const GlobalStyle = createGlobalStyle`
* {  
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
    background-color: ${veryLightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
}
`;