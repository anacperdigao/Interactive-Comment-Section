import React from "react";
import * as S from "./style.js"
import juliusomo from "../../assets/images/image-juliusomo.png"


const ComentarioNovo = () => {

    return (

        <S.ContainerComentarioNovo>
            <S.FotoUsuario src = {juliusomo} alt = "avatar" />
            <S.AreaDeTexto placeholder="Add a comment..." rows={5}/>
            <S.BotaoSend>SEND</S.BotaoSend>
        </S.ContainerComentarioNovo>
    )
};

export default ComentarioNovo