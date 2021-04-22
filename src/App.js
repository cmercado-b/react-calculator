import React, { Component } from 'react';
import './App.css';

import Button from './Button/Button.js';
import Display from './Display/Display.js';
import Clear from './Button/Clear.js';

class App extends Component {

  state = {
    display: "",
    firstNum: "",
    secondNum: "",
    operator: ""
  };

  displayHandler = (val) => {
    this.setState( { display: (this.state.display + val).slice(0,10) } );
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
    };
  };

  clearDisplayHandler = () => {
    this.setState( { display: "" } );
    console.clear();
    console.log('Successfully Cleared');
  };

  addHandler = (val) => {
    this.state.firstNum = this.state.display;
    this.setState( { display: "" } );
    this.state.operator = "add";

    console.log(val);
    console.log('Addition');
  };
  
  subtractHandler = (val) => {
    this.state.firstNum = this.state.display;
    this.setState( { display: "" } );
    this.state.operator = "minus";

    console.log(val);
    console.log('Subtraction');
  };

  multiplyHandler = (val) => {
    this.state.firstNum = this.state.display;
    this.setState( { display: "" } );
    this.state.operator = "times";

    console.log(val);
    console.log('Multiplication');
  };

  percentHandler = (val) => {
    this.state.firstNum = this.state.display;
    this.setState( { display: "" } );
    this.state.operator = "percent";
    
    console.log(val);
    console.log('Percentage');    
  };

  divideHandler = (val) => {
    this.state.firstNum = this.state.display;
    this.setState( { display: "" } );
    this.state.operator = "divide";

    console.log(val);
    console.log('Division');
  };
  
  rootHandler = (val) => {
    this.state.firstNum = this.state.display;
    this.setState( { display: "" } );
    this.state.operator = "square";

    console.log(val);
    console.log('Square Root');
  };

  Evaluate = (val) => {
    this.state.secondNum = this.state.display;

    if (this.state.operator == "add") {
      this.setState ( { display: (parseFloat(this.state.firstNum) +  
        parseFloat(this.state.secondNum)).toFixed(2) } );
    } 
    else if (this.state.operator == "minus") {
      this.setState ( { display: (parseFloat(this.state.firstNum) -  
        parseFloat(this.state.secondNum).toFixed(2)) } );
    }
    else if (this.state.operator == "multiply") {
      this.setState ( { display: (parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)).toFixed(2) } );
    }
    else if (this.state.operator == "divide") {
      this.setState( { display: (parseFloat(this.state.firstNum) / 
        parseFloat(this.state.secondNum)).toFixed(2) } );
    }
    else if (this.state.operator == "percent") {
      this.setState( { display: ((parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)) / 100).toFixed(2) } );
    }
    else {
      this.setState( { display: (Math.sqrt(this.state.firstNum)).toFixed(2) } );
    }
  };

   render() {
    return (
      <div className="App">
          <div className="Container">
            <Display limited={ this.limitTextHandler }> { this.state.display } </Display>
            <div className="buttonContainer">
                <div className="buttonRow">
                  <Clear cleared={ this.clearDisplayHandler }>C</Clear>
                  <Button clicked={ this.rootHandler }>√</Button>
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
                  <Button clicked={ this.Evaluate }>=</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
