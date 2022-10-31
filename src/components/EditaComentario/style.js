import styled from 'styled-components';
import { darkBlue, grayishBlue, lightGrayishBlue, moderateBlue } from '../UI/variaveis';


export const ContainerEditaComentario = styled.div`
    background-color: white;
    height: 180px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: space-between;
    padding: 15px 25px;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 650px;
`;

export const ContainerUsuarioData = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`

export const FotoUsuario = styled.img`
    height: 30px;
    width: 30px;
`

export const NomeUsuario = styled.p`
    color: ${darkBlue};
    font-weight: 500;
`


export const DataAtualizacao = styled.p`
    color: ${grayishBlue};
`

export const TagYou = styled.p`
    background-color: ${moderateBlue};
    color: white;
    padding: 1px 5px;
    border-radius: 2px;
`

export const AreaDeTexto = styled.textarea`
    border: 1px solid ${lightGrayishBlue};
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    outline: none;
    resize: none;
    font-size: 16px;
    color: ${grayishBlue};
    line-height: 1.4em;
    margin: 5px 0px;

    ::placeholder{
        font-size: 16px;
        color: ${grayishBlue};
        line-height: 1.4em;
    }
`

export const BotaoUpdate = styled.button`
    width: 80px;
    height: 35px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: ${moderateBlue};
    position: relative;
    align-self: flex-end;
    cursor: pointer;

    :hover{
        background-color: ${lightGrayishBlue};
    }
`