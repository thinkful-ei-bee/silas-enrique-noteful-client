import React from 'react';
import {NavLink} from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component  {    

  
  render(){
    return ( 
      <li key={this.props.folderid} className ='folderItem'>         
        <NavLink onClick={() =>this.props.changeOrigin(false)} to={`/Folder/${this.props.folderid}`}>
        {this.props.folderName}</NavLink>
      </li>
    );
  }
}

export default Folder;