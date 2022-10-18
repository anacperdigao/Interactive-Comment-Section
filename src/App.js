import React, { useState } from "react";
import Comentario from "./components/Comentario";
import { GlobalStyle } from "./components/GlobalStyle";
import data from '../src/info/data.json'
import ComentarioNovo from "./components/ComentarioNovo";


function App() {

  const [commentsList, setCommentsList] = useState([...data.comments]);

  const [newComment, setNewComment] = useState("");


  const handleTextComment = (event) => {
    setNewComment(event.target.value)
  }


  const handleSend = () => {
    const copyCommentsList = [...commentsList];
    
    const newCommentObject = {
      content: newComment,
      createdAt: "now",
      user:{
        username: "juliusomo",
      },
    }

    setCommentsList([...copyCommentsList, newCommentObject]);
    setNewComment("");
  }


  return (
    <div className="App">
      <>
        <GlobalStyle />

        {commentsList.map(({content, createdAt, user, id, replies}) => (
          <Comentario
            key={id} 
            content = {content} 
            createdAt = {createdAt} 
            username = {user.username}
            replies = {replies}
          />
        ))} 
  
        <ComentarioNovo
        handleSend={handleSend}
        handleTextComment={handleTextComment}
        newComment={newComment}
        />

      </>
    </div>
  );
}

export default App;
