import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import notes from "../notes"




function App(){
    return <div>
        <Header></Header>
       {notes.map(function(notesItem){
    return  <Note
    title={notesItem.title}
    content= {notesItem.content}></Note>
}
)}







        <Footer></Footer>
    </div>
}
export default App;