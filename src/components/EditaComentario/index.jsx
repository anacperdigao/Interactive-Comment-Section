import React from "react";
import * as S from "./style.js"
import juliusomo from "../../assets/images/image-juliusomo.png"
import { useComentariosContext } from "../../common/context/Comentarios.js";


const EditaComentario = ({content, index}) => {


    const { handleUpdate } = useComentariosContext()

    return(
        <S.ContainerEditaComentario>

            <S.ContainerUsuarioData>
                <S.FotoUsuario src={juliusomo} alt="Avatar usuário" />
                <S.NomeUsuario>juliusomo</S.NomeUsuario>
                <S.TagYou>you</S.TagYou>
                <S.DataAtualizacao>now</S.DataAtualizacao>
            </S.ContainerUsuarioData>

            <S.AreaDeTexto>{content}</S.AreaDeTexto>

            <S.BotaoUpdate onClick={(evento) => handleUpdate(evento, index)}>
                UPDATE
            </S.BotaoUpdate>
        </S.ContainerEditaComentario>
    )
}

export default EditaComentario