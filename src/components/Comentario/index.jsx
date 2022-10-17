import React from "react";
import { FaReply } from 'react-icons/fa'
import * as S from "./style.js"
import foto from "../../assets/images/image-amyrobson.png"


const Comentario = () => {
    return (
        <S.ContainerComentario>

            <S.ContainerUsuarioData>
                <S.FotoUsuario src={foto} alt=""/>
                <S.NomeUsuario>amyrobson</S.NomeUsuario>
                <S.DataAtualizacao>1 month ago</S.DataAtualizacao>
            </S.ContainerUsuarioData>

            <S.ContainerReply>
                <FaReply />
                <S.TextoReply>Reply</S.TextoReply>
            </S.ContainerReply>

            <S.TextoComentario>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</S.TextoComentario>

        </S.ContainerComentario>
    )
};

export default Comentario