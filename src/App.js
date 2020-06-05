import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <Router>
      <div className="Main">
        <MyNavbar />
      </div>
    </Router>
  );
}

export default App;
