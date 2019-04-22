import React, { Component } from 'react';

import './assets/stylesheets/reset.css';
import './App.css';

import Modal from './components/Modal'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Modal />
        <Form />
      </main>
    );
  }
}

export default App;
