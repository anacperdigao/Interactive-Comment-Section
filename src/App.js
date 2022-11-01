// React
import React from "react";

// Style
import { GlobalStyle } from "./components/GlobalStyle";

// Componentes
import Comentario from "./components/Comentario";
import ComentarioNovo from "./components/ComentarioNovo";

// Context
import { useComentariosContext } from "./common/context/Comentarios";


function App() {

  const { commentsList } = useComentariosContext()

  return (
    <div className="App">

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
          
        <ComentarioNovo />

    </div>
  );
}

export default App;
