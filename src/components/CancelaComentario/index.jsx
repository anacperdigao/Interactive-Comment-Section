import React from "react";
import * as S from "./style.js"

const CancelaComentario = ({model, setModel, handleDelete, index}) => {


    return(

        <S.TelaCancelar>
          <S.Dialog open={model}>
            <S.Titulo>Delete comment</S.Titulo>
            <S.Paragrafo>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </S.Paragrafo>
            <S.ContainerBotoes>
              <S.BotaoNoDelete onClick={() => setModel(false)}>
                No, cancel
              </S.BotaoNoDelete>
              <S.BotaoYesDelete onClick={(evento) => handleDelete(evento, index)}>
                Yes, Delete
              </S.BotaoYesDelete>
            </S.ContainerBotoes>
          </S.Dialog>
        </S.TelaCancelar>

    )
}

export default CancelaComentario