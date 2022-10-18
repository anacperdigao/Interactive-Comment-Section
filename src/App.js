import React from "react";
import Comentario from "./components/Comentario";
import { GlobalStyle } from "./components/GlobalStyle";
import data from '../src/info/data.json'
import ComentarioNovo from "./components/ComentarioNovo";


function App() {



  return (
    <div className="App">
      <>
        <GlobalStyle />

        {data.comments.map(({content, createdAt, user, id}) => 
        <Comentario 
        key={id} 
        content = {content} 
        createdAt = {createdAt} 
        username = {user.username} 
        /> )
        .replies.map(({content, createdAt, user, id}) => 
        <Comentario 
        key={id} 
        content = {content} 
        createdAt = {createdAt} 
        username = {user.username} 
        />        
        )}


        
        <ComentarioNovo />

      </>
    </div>
  );
}

export default App;
