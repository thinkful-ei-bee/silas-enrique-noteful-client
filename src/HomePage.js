import React from 'react';
import {Link} from 'react-router-dom';
import ApiService from './api-service';

class HomePage extends React.Component {

  componentDidMount() {
    ApiService.getAll()
      .then(({notes, folders}) => {
        console.log('notes',notes);
        console.log('folders', folders);
      })
  }
  
  render(){  
    return (
      <h1>
        <Link to='/' onClick={() => this.props.changeOrigin(true)}>Noteful</Link>
      </h1>
    );
  }
}

export default HomePage;