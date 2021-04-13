import React, { Component } from 'react';
import './App.css';

import Button from './Button/Button.js';
import Display from './Display/Display.js';

class App extends Component {
   render() {
    return (
      <div className="App">
          <Display />
          <div className="buttonContainer">
              <div className="buttonRow">
                <Button>C</Button>
                <Button>±</Button>
                <Button>%</Button>
                <Button>*</Button>
              </div>
              <div className="buttonRow">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>÷</Button>
              </div>
              <div className="buttonRow">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>×</Button>
              </div>
              <div className="buttonRow">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>−</Button>
              </div>
              <div className="buttonRow">
                <Button>0</Button>
                <Button></Button>
                <Button>.</Button>
                <Button>+</Button>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
