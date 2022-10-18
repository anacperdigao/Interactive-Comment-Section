import styled from 'styled-components';
import { darkBlue, grayishBlue, lightGrayishBlue, moderateBlue } from '../UI/variaveis';


export const ContainerComentario = styled.div`
    background-color: white;
    height: 160px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 30% 70%;
    border-radius: 10px;
    justify-content: space-between;
    padding: 25px;
    font-size: 16px;
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


export const ContainerReply = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 5px;
    color: ${moderateBlue};
    cursor: pointer;

    :hover{
        color: ${lightGrayishBlue};
    }
`

export const TextoComentario = styled.p`
    grid-column: span 2;
    margin-top: 10px;
    color: ${grayishBlue};
    line-height: 1.4em;
`

export const TextoReply = styled.p`
    font-weight: 500;
`