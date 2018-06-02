import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, GridRow } from 'semantic-ui-react';
import Header from './components/Header'
import Searchbar from './components/SearchBar/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <Header />
        </header>
        <div className="Body">

            <p>Here manifests our hopes and dreams for EDC2019.</p>

              <p>Search bar</p>
              <Searchbar />


            <br />
            <p>Table List</p>
            <br />

        </div>
        <footer>
        </footer>
      </div>
      
    );
  }
}

export default App;
