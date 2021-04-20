import React, { Component } from 'react';
import './App.css';

import Button from './Button/Button.js';
import Display from './Display/Display.js';
import Clear from './Button/Clear.js';

class App extends Component {

  state = {
    display: "",
    firstInt: "",
    secondInt: "",
    operator: ""
  };

  displayHandler = val => {
    this.setState( { display: this.state.display + val } );
  }

  clearDisplayHandler = () => {
    this.setState( { display: "" } );
  }

   render() {
    return (
      <div className="App">
          <div className="Container">
            <Display > { this.state.display } </Display>
            <div className="buttonContainer">
                <div className="buttonRow">
                  <Clear cleared={ this.clearDisplayHandler }>C</Clear>
                  <Button>±</Button>
                  <Button>%</Button>
                  <Button>×</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>7</Button>
                  <Button clicked={ this.displayHandler }>8</Button>
                  <Button clicked={ this.displayHandler }>9</Button>
                  <Button>÷</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>4</Button>
                  <Button clicked={ this.displayHandler }>5</Button>
                  <Button clicked={ this.displayHandler }>6</Button>
                  <Button>−</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>1</Button>
                  <Button clicked={ this.displayHandler }>2</Button>
                  <Button clicked={ this.displayHandler }>3</Button>
                  <Button>+</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>0</Button>
                  <Button clicked={ this.displayHandler }>00</Button>
                  <Button clicked={ this.displayHandler }>.</Button>
                  <Button>=</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
