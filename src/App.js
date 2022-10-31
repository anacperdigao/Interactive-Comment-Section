import React from "react";
import Comentario from "./components/Comentario";
import { GlobalStyle } from "./components/GlobalStyle";
import ComentarioNovo from "./components/ComentarioNovo";
import { ComentariosProvider, useComentariosContext } from "./common/context/Comentarios";
//import RespostaComentarios from "./components/RespostaComentarios";


function App() {

  const { commentsList } = useComentariosContext()

  
  return (
    <div className="App">

      <ComentariosProvider>
        <GlobalStyle />

        {commentsList.map(({content, createdAt, user, replies}, index) => 
          <Comentario
            key={content} 
            content = {content} 
            createdAt = {createdAt} 
            username = {user.username}
            replies = {replies}
            index={index}
          />
        )}

        {/* {commentsList[1].replies.map(({content, createdAt, user, replies}, index) => 
          <RespostaComentarios
            key={content} 
            content = {content} 
            createdAt = {createdAt} 
            username = {user.username}
            replies = {replies}
            handleDelete = {handleDelete}
            handleEdit = {handleEdit}
            index={index}
          />
        )} */}

          
        <ComentarioNovo />
      </ComentariosProvider>
    </div>
  );
}

export default App;
