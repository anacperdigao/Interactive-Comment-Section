import React from "react";
import Comentario from "./components/Comentario";
import { GlobalStyle } from "./components/GlobalStyle";


function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Comentario />
      </>
    </div>
  );
}

export default App;
