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

  displayHandler = (val) => {
    this.setState( { display: this.state.display + val } );
    console.log(val);
    console.log('Successfully Inputed');
  };

  zeroHandler = (val) => {
    if (this.state.display !== "") {
      this.setState( {display: this.state.display + val } );
      console.log(val);
      console.log('Successfully Inputed Zero');
    } else {
      console.log('You must enter "Natural Number" first');
    };
  };

  decimalPointHandler = (val) => {
    if (this.state.display.indexOf('.') === -1) {
      this.setState( {display: this.state.display + val } );
      console.log(val);
      console.log('Successfully Inputed Decimal Point');
    } else {
      this.setState( {display: 'Syntax Error' } );
      console.log('Only one decimal point')
    }
  }

  limitTextHandler = (val) => {
    if (this.state.display.length > 11) {
      console.log('Input 11 Character');
    }; 
  };

  clearDisplayHandler = () => {
    this.setState( { display: "" } );
    console.clear();
    console.log('Successfully Cleared');
  };

  addHandler = (val) => {
    console.log(val);
    console.log('Addition');
  };
  
  subtractHandler = (val) => {
    console.log(val);
    console.log('Subtraction');
  };

  multiplyHandler = (val) => {
    console.log(val);
    console.log('Multiplication');
  };

  percentHandler = (val) => {
    console.log(val);
    console.log('Percentage');
  };

  divideHandler = (val) => {
    console.log(val);
    console.log('Division');
  };

   render() {
    return (
      <div className="App">
          <div className="Container">
            <Display limited={ this.limitTextHandler } > { this.state.display } </Display>
            <div className="buttonContainer">
                <div className="buttonRow">
                  <Clear cleared={ this.clearDisplayHandler }>C</Clear>
                  <Button clicked={ this.addHandler }>±</Button>
                  <Button clicked={ this.percentHandler }>%</Button>
                  <Button clicked={ this.multiplyHandler }>×</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>7</Button>
                  <Button clicked={ this.displayHandler }>8</Button>
                  <Button clicked={ this.displayHandler }>9</Button>
                  <Button clicked={ this.divideHandler }>÷</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>4</Button>
                  <Button clicked={ this.displayHandler }>5</Button>
                  <Button clicked={ this.displayHandler }>6</Button>
                  <Button clicked={ this.subtractHandler }>−</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.displayHandler }>1</Button>
                  <Button clicked={ this.displayHandler }>2</Button>
                  <Button clicked={ this.displayHandler }>3</Button>
                  <Button clicked={ this.addHandler }>+</Button>
                </div>
                <div className="buttonRow">
                  <Button clicked={ this.zeroHandler }>00</Button>
                  <Button clicked={ this.zeroHandler }>0</Button>
                  <Button clicked={ this.decimalPointHandler }>.</Button>
                  <Button>=</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
