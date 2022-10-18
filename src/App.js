import React from "react";
import Comentario from "./components/Comentario";
import { GlobalStyle } from "./components/GlobalStyle";
import data from '../src/info/data.json'
import ComentarioNovo from "./components/ComentarioNovo";
import RespostaComentarios from "./components/RespostaComentarios";

function App() {



  return (
    <div className="App">
      <>
        <GlobalStyle />

        {data.comments.map(({content, createdAt, user, id, replies}) => (
          <Comentario
            key={id} 
            content = {content} 
            createdAt = {createdAt} 
            username = {user.username}
            replies = {replies}
          />
        ))} 
  
        <ComentarioNovo />

      </>
    </div>
  );
}

export default App;
