import styled from 'styled-components';
import { grayishBlue, lightGrayishBlue, moderateBlue } from '../UI/variaveis';


export const ContainerComentarioNovo = styled.div`
    background-color: white;
    width: 650px;
    height: 120px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-between;
    padding: 20px;
    font-size: 16px;
`;


export const FotoUsuario = styled.img`
    height: 40px;
    width: 40px;
`

export const AreaDeTexto = styled.textarea`
    border: 1px solid ${lightGrayishBlue};
    border-radius: 10px;
    padding: 10px;
    width: 450px;
    outline: none;
    resize: none;

    ::placeholder{
        font-size: 16px;
        color: ${grayishBlue};
        line-height: 1.4em;
    }
`

export const BotaoSend = styled.button`
    width: 80px;
    height: 35px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: ${moderateBlue};
    cursor: pointer;

    :hover{
        background-color: ${lightGrayishBlue};
    }
`