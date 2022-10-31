import { createContext, useContext, useState } from "react";
import data from '../../info/data.json'


export const ComentariosContext = createContext();
ComentariosContext.displayName = 'Comentarios'


export const ComentariosProvider = ({children}) => {

    const [commentsList, setCommentsList] = useState([...data.comments]);
    const [newComment, setNewComment] = useState("");
    const [editaComentario, setEditaComentario] = useState(false);
    //const [index, setIndex] = useState(-1)
    //const [commentUpdated, setCommentUpdated] = useState(commentsList.content)

    return(
        <ComentariosContext.Provider 
        value={{
            commentsList, 
            setCommentsList,
            newComment,
            setNewComment,
            editaComentario,
            setEditaComentario
        }}
        >
            {children}
        </ComentariosContext.Provider>
    )
}


export const useComentariosContext = () => {

    const {commentsList, setCommentsList, newComment, setNewComment, editaComentario, setEditaComentario} 
    = useContext(ComentariosContext);

    //--------------------------------Finalizado-----------------------------------------

    const handleTextComment = (event) => {
        setNewComment(event.target.value)
      }
    
    //-------------------------------Em andamento-------------------------------------------
      /*
      const handleTextCommentUpdated = (event) => {
        setCommentUpdated(event.target.value)
        console.log(commentUpdated)
      }
      */
    //--------------------------------Finalizado----------------------------------------
    
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
    
    //---------------------------------Finalizado-----------------------------------------

      const handleDelete = (evento, index) => {
        const copyCommentsList = [...commentsList];
        copyCommentsList.splice(index, 1)
    
        setCommentsList([...copyCommentsList])
      }
    
    //--------------------------------Em andamento---------------------------------------

    // eu só quero que o edit comentario abra no index que eu cliquei
      const handleEdit = (evento, index) => {
        // const copyCommentsList = [...commentsList];
        // const comentarioEditavel = copyCommentsList.splice(index, 1)
    
        setEditaComentario(true)
        console.log(editaComentario)
    
      }
    
    //--------------------------------Em andamento-----------------------------------------

      const handleUpdate = (evento, index) => {
    
        //commentsList.content = commentUpdated
        //setCommentUpdated("")
        setEditaComentario(false)
      }
    
    //------------------------------------------------------------------------
  

    return {
        handleTextComment,
        handleSend,
        handleDelete,
        handleEdit,
        handleUpdate,
        commentsList, 
        setCommentsList,
        newComment,
        setNewComment,
        editaComentario,
        setEditaComentario
    }
}
