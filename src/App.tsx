import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Weather from './components/Weather' 

class App extends Component {
 

  render() {
    return (
      <div>
        <Weather />
      
    
        </div>
   
    );
  }
}


export default App;
