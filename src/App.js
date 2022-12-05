/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </>

    );
  }
}

export default App;
