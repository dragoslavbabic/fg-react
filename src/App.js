import React, {Component} from 'react';
import MyNavbar from './components/MyNavbar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Content />
      </div>
    );
  }
}

export default App;
