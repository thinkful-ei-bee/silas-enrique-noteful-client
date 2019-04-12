import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';
import STORE from './STORE'
import Note from './Note'

class NoteList extends React.Component  {
    

  render(){
    let NOTES =null;
    if(this.props.match !== undefined){
     NOTES = this.props.store.notes.filter(note =>{
       return note.folderId === this.props.match.params.id
      }
    )
    }
    else{
      NOTES = this.props.store.notes;
    }

     let newnotes =  NOTES.map(note => {
        return <Note noteId = {note.id} 
          modified = {note.modified} 
          name= {note.name}
           />
      })
    return (
      <ul className="noteList">
        {newnotes}
      </ul>
    );
  }
}

export default NoteList;