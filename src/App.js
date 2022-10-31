import React, { useState } from "react";
import Comentario from "./components/Comentario";
import { GlobalStyle } from "./components/GlobalStyle";
import data from '../src/info/data.json'
import ComentarioNovo from "./components/ComentarioNovo";
//import RespostaComentarios from "./components/RespostaComentarios";


function App() {

  const [commentsList, setCommentsList] = useState([...data.comments]);
  const [newComment, setNewComment] = useState("");
  const [editaComentario, setEditaComentario] = useState(false);
  //const [index, setIndex] = useState(-1)
  //const [commentUpdated, setCommentUpdated] = useState(commentsList.content)


  const handleTextComment = (event) => {
    setNewComment(event.target.value)
  }

  /*
  const handleTextCommentUpdated = (event) => {
    setCommentUpdated(event.target.value)
    console.log(commentUpdated)
  }
  */


  const handleSend = (evento) => {
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


  const handleDelete = (evento, index) => {
    const copyCommentsList = [...commentsList];
    copyCommentsList.splice(index, 1)

    setCommentsList([...copyCommentsList])
  }


// eu só quero que o edit comentario abra no index que eu cliquei
  const handleEdit = (evento, index) => {
    // const copyCommentsList = [...commentsList];
    // const comentarioEditavel = copyCommentsList.splice(index, 1)

    setEditaComentario((evento, index) => true)
    console.log(editaComentario)

  }


  const handleUpdate = (evento, index) => {

    //commentsList.content = commentUpdated
    //setCommentUpdated("")
    setEditaComentario(false)
  }
  


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
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
          index={index}
          editaComentario = {editaComentario}
          setEditaComentario = {setEditaComentario}
          handleUpdate = {handleUpdate}
          //handleTextCommentUpdated = {handleTextCommentUpdated}
          //commentUpdated = {commentUpdated}
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

        
      <ComentarioNovo
      handleSend={handleSend}
      handleTextComment={handleTextComment}
      newComment={newComment}
      />
      
    </div>
  );
}

export default App;
