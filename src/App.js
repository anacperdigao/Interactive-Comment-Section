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


  const handleSend = (evento) => {
    const copyCommentsList = [...commentsList];

    const newCommentObject = {
      content: newComment,
      createdAt: "now",
      user:{
        username: "juliusomo",
        image: {
          png: "./images/avatars/image-juliusomo.png"
        },
      },
    }

    setCommentsList([...copyCommentsList, newCommentObject]);
    setNewComment("");
  }


  const handleDelete = (evento, index) => {
    const copyCommentsList = [...commentsList];
    copyCommentsList.splice(index, 1)

    setCommentsList([...copyCommentsList])
  }


  return (
    <div className="App">
      <>
        <GlobalStyle />

        {commentsList.map(({content, createdAt, user, replies}, index) => (
          <Comentario
            key={content} 
            content = {content} 
            createdAt = {createdAt} 
            username = {user.username}
            replies = {replies}
            handleDelete = {handleDelete}
            index={index}
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
