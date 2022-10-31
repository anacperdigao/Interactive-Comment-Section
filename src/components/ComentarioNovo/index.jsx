import React from "react";
import * as S from "./style.js"
import juliusomo from "../../assets/images/image-juliusomo.png"
import { useComentariosContext } from "../../common/context/Comentarios.js";


const ComentarioNovo = () => {

    const { handleSend, handleTextComment, newComment } = useComentariosContext()

    return (

        <S.ContainerComentarioNovo>
            <S.FotoUsuario src = {juliusomo} alt = "avatar" />
            <S.AreaDeTexto value={newComment} onChange={handleTextComment} placeholder="Add a comment..." rows={5}/>
            <S.BotaoSend onClick={handleSend}>SEND</S.BotaoSend>
        </S.ContainerComentarioNovo>
    )
};

export default ComentarioNovo