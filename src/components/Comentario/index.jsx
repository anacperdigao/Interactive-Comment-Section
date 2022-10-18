import React from "react";
import { FaReply, FaTrash, FaEdit } from 'react-icons/fa'
import * as S from "./style.js"
import amyrobson from "../../assets/images/image-amyrobson.png"
// import juliusomo from "../../assets/images/image-juliusomo.png"
// import maxblagun from "../../assets/images/image-maxblagun.png"
// import ramsesmiron from "../../assets/images/image-ramsesmiron.png"


const Comentario = ({content, createdAt, username, handleDelete, index}) => {

    // const imagens = [
    //     {username: amyrobson}, 
    //     {username: juliusomo}, 
    //     {username: maxblagun}, 
    //     {username: ramsesmiron},
    // ]

    return (
        <S.ContainerComentario>

            <S.ContainerUsuarioData>
                <S.FotoUsuario src = {amyrobson} alt = "avatar" />
                <S.NomeUsuario>{username}</S.NomeUsuario>
                <S.DataAtualizacao>{createdAt}</S.DataAtualizacao>
            </S.ContainerUsuarioData>

            {username==="juliusomo" 
            ?
            <S.ContainerDeleteEdit>
                <S.ContainerDelete onClick={(evento) => handleDelete(evento, index)}>
                    <FaTrash />
                    <S.TextoDelete>Delete</S.TextoDelete>
                </S.ContainerDelete>

                <S.ContainerEdit>
                    <FaEdit />
                    <S.TextoEdit>Edit</S.TextoEdit>
                </S.ContainerEdit>
            </S.ContainerDeleteEdit>            
            :
            <S.ContainerReply>
                <FaReply />
                <S.TextoReply>Reply</S.TextoReply>
            </S.ContainerReply> 
            }

            <S.TextoComentario>{content}</S.TextoComentario>

        </S.ContainerComentario>
    )
};

export default Comentario