import styled from 'styled-components';
import { darkBlue, grayishBlue, softRed } from '../UI/variaveis';

export const TelaCancelar = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 200px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    line-height: 26px;
` 

export const Dialog = styled.dialog`
    border: none;
    border-radius: 10px;
    max-width: 320px;
    padding: 20px;
    margin: auto;
`


export const Titulo = styled.h2`
    color: ${darkBlue};
    margin: 10px 0px;
`


export const Paragrafo = styled.p`
    color: ${grayishBlue};
    margin-bottom: 10px;
`

export const BotaoYesDelete = styled.button`
    border: none;
    margin: 10px;
    padding: 15px 18px;
    background-color: ${softRed};
    border-radius: 10px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    
    :hover{
        opacity: 0.9;
    }

`

export const BotaoNoDelete = styled.button`
    border: none;
    margin: 10px;
    padding: 15px 18px;
    background-color: ${grayishBlue};
    border-radius: 10px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    :hover{
        opacity: 0.9;
    }
`

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
  