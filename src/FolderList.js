import React from 'react';
import Folder from './Folder'

class FolderList extends React.Component  {

  

  render() {

    let folders = this.props.store.folders.map(folder =>{
      return <Folder changeOrigin={this.props.changeOrigin}
        folderid={folder.id} 
        folderName= {folder.name} />
    })
      
    return (
      <ul className='folderList'>
        {folders}
      </ul>
    );
  }
}

export default FolderList;