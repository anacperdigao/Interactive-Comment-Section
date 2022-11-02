import React, { useState } from "react";
import { FaTrash, FaEdit } from 'react-icons/fa'
import * as S from "./style.js"
import amyrobson from "../../assets/images/image-amyrobson.png"
import juliusomo from "../../assets/images/image-juliusomo.png"
import maxblagun from "../../assets/images/image-maxblagun.png"
import ramsesmiron from "../../assets/images/image-ramsesmiron.png"
import CancelaComentario from "../CancelaComentario";
import { useComentariosContext } from "../../common/context/Comentarios.js";


const RespostaComentarios = ({content, createdAt, username, index}) => {

    const [cancela, setCancela] = useState(false); // Tela de cancelar começa como false

    const { handleEdit } = useComentariosContext()

    return (
        <S.ContainerGeral>

            <S.LinhaVertical></S.LinhaVertical>

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
                    { username === "juliusomo" ? <S.TagYou>you</S.TagYou> : null}
                    <S.DataAtualizacao>{createdAt}</S.DataAtualizacao>
                </S.ContainerUsuarioData>

                {username==="juliusomo" 
                &&
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
                }

                <S.TextoComentario>{content}</S.TextoComentario>
            </S.ContainerComentario>

            { cancela && <CancelaComentario cancela={cancela} setCancela={setCancela} index={index} /> }
            
        </S.ContainerGeral>
    )
};

export default RespostaComentarios