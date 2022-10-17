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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;