import React, { useState } from "react";
import { FaReply, FaTrash, FaEdit } from 'react-icons/fa'
import * as S from "./style.js"
import amyrobson from "../../assets/images/image-amyrobson.png"
import juliusomo from "../../assets/images/image-juliusomo.png"
import maxblagun from "../../assets/images/image-maxblagun.png"
import ramsesmiron from "../../assets/images/image-ramsesmiron.png"
import CancelaComentario from "../CancelaComentario";
import EditaComentario from "../EditaComentario/index.jsx";
import { useComentariosContext } from "../../common/context/Comentarios.js";
import RespostaComentarios from "../RespostaComentarios/index";


const Comentario = ({content, createdAt, username, index}) => {

    const [cancela, setCancela] = useState(false); // Tela de cancelar começa como false
    // state editaComentario nao deveria existir 
     
    const { handleEdit, editaComentario, commentsList } = useComentariosContext()


    return (
        <>
            {editaComentario
            ?
                <EditaComentario index={index} content={content} />
            :
                <S.ContainerComentario>

                    <S.ContainerUsuarioData>
                        { username === "amyrobson" ? <S.FotoUsuario src = {amyrobson} alt = "avatar" /> : (
                            username === "juliusomo" ? <S.FotoUsuario src = {juliusomo} alt = "avatar" /> : (
                                username === "maxblagun" ? <S.FotoUsuario src = {maxblagun} alt = "avatar" /> : (
                                    username === "ramsesmiron" ? <S.FotoUsuario src = {ramsesmiron} alt = "avatar" /> : null  
                                )  
                            )
                        )}

                        <S.NomeUsuario>{username}</S.NomeUsuario>
                        { username === "juliusomo" && <S.TagYou>you</S.TagYou>}
                        <S.DataAtualizacao>{createdAt}</S.DataAtualizacao>
                    </S.ContainerUsuarioData>

                    {username==="juliusomo" 
                    ?
                    <S.ContainerDeleteEdit>
                        <S.ContainerDelete onClick={() => setCancela(true)}>
                            <FaTrash />
                            <S.TextoDelete>Delete</S.TextoDelete>
                        </S.ContainerDelete>

                        <S.ContainerEdit onClick={(evento) => handleEdit(evento, index)}>
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
            }

            {commentsList[index].replies.map(({content, createdAt, user, replies}, index) => 
                <RespostaComentarios
                    key={content} 
                    content = {content} 
                    createdAt = {createdAt} 
                    username = {user.username}
                    replies = {replies}
                    index={index}
                />
            )}    

            {cancela && <CancelaComentario cancela={cancela} setCancela={setCancela} index={index} />}

        </>
    )
};

export default Comentario