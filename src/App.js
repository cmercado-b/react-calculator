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
    const numbers = {'input': this.state.display + val };
    localStorage.setItem('number', JSON.stringify(numbers));
    this.setState( { display: (this.state.display + val).slice(0,10) } );
    console.log(val);
    console.log('Successfully Inputed');
  };

  zeroHandler = (val) => {
    localStorage.setItem('zero', true);
    if (this.state.display !== "") {
      this.setState( {display: this.state.display + val } );
      console.log(val);
      console.log('Successfully Inputed Zero');
    } else {
      console.log('You must enter "Natural Number" first');
    };
  };

  decimalPointHandler = (val) => {
    localStorage.setItem('decimal', true);
    if (this.state.display.indexOf('.') === -1) {
      localStorage.setItem('clickedValue', val);
      this.setState( {display: this.state.display + val } );
      console.log(val);
      console.log('Successfully Inputed Decimal Point');
    } else {
      this.setState( {display: 'Syntax Error' } );
      console.log('Only one decimal point')
    };
  };

  clearDisplayHandler = () => {
    localStorage.clear();
    this.setState( { display: "" } );
    console.clear();
    console.log('Successfully Cleared');
  };

  addHandler = (val) => {
    localStorage.setItem('sumOperator', JSON.stringify(...val, val));
    localStorage.setItem('firstInput', this.state.firstNum);
    localStorage.setItem('secondInput', this.state.secondNum);
    this.setState( {firstNum: this.state.display } );
    this.setState( { display: "" } );
    this.setState( {operator: "add"} );
    console.log(val);
    console.log('Addition');
  };
  
  subtractHandler = (val) => {
    localStorage.setItem('diffOperator', JSON.stringify(...val, val));
    this.setState( {firstNum: this.state.display } );
    this.setState( { display: "" } );
    this.setState( {operator: "minus"} );

    console.log(val);
    console.log('Subtraction');
  };

  multiplyHandler = (val) => {
    localStorage.setItem('productOperator', JSON.stringify(...val, val));
    this.setState( {firstNum: this.state.display } );
    this.setState( { display: "" } );
    this.setState( {operator: "times"} );

    console.log(val);
    console.log('Multiplication');
  };

  percentHandler = (val) => {
    localStorage.setItem('percentageOperator', JSON.stringify(...val, val));
    this.setState( {firstNum: this.state.display } );
    this.setState( { display: "" } );
    this.setState( {operator: "percent"} );
    
    console.log(val);
    console.log('Percentage');    
  };

  divideHandler = (val) => {
    localStorage.setItem('quotientOperator', JSON.stringify(...val, val));
    this.setState( {firstNum: this.state.display } );
    this.setState( { display: "" } );
    this.setState( {operator: "divide"} );

    console.log(val);
    console.log('Division');
  };
  
  rootHandler = (val) => {
    localStorage.setItem('squareOperator', JSON.stringify(...val, val));
    this.setState( {firstNum: this.state.display } );
    this.setState( { display: "" } );
    this.setState( {operator: "square"} );

    console.log(val);
    console.log('Square Root');
  };

  Evaluate = (val) => {
    this.state.secondNum = this.state.display;
    // this.setState( {secondNum: this.state.display} );

    if (this.state.operator === "add") {
      this.setState ( { display: (parseFloat(this.state.firstNum) +  
        parseFloat(this.state.secondNum)).toPrecision().slice(0,11) } );

        console.log(val);
        console.log('Equal');
        console.log(parseFloat(this.state.firstNum) +  
        parseFloat(this.state.secondNum));

        localStorage.setItem('operator', JSON.stringify(...val, val))
        localStorage.setItem('equalTo', JSON.parse(parseFloat(this.state.firstNum) +  
        parseFloat(this.state.secondNum)));
    } 
    else if (this.state.operator === "minus") {
      this.setState ( { display: (parseFloat(this.state.firstNum) -  
        parseFloat(this.state.secondNum)).toPrecision().slice(0,11)} );

        console.log(val);
        console.log('Equal');
        console.log(parseFloat(this.state.firstNum) -  
        parseFloat(this.state.secondNum));

        localStorage.setItem('operator', JSON.stringify(...val, val))
        localStorage.setItem('equalTo', JSON.parse(parseFloat(this.state.firstNum) -  
        parseFloat(this.state.secondNum)));
    }
    else if (this.state.operator === "times") {
      this.setState ( { display: (parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)).toPrecision().slice(0,11) } );

        console.log(val);
        console.log('Equal');
        console.log(parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum));

        localStorage.setItem('operator', JSON.stringify(...val, val))
        localStorage.setItem('equalTo', JSON.parse(parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)));
    }
    else if (this.state.operator === "divide") {
      this.setState( { display: (parseFloat(this.state.firstNum) / 
        parseFloat(this.state.secondNum)).toPrecision().slice(0,11) } );

        console.log(val);
        console.log('Equal');
        console.log(parseFloat(this.state.firstNum) /  
        parseFloat(this.state.secondNum));

        localStorage.setItem('operator', JSON.stringify(...val, val))
        localStorage.setItem('equalTo', JSON.parse(parseFloat(this.state.firstNum) /  
        parseFloat(this.state.secondNum)));
    }
    else if (this.state.operator === "percent") {
      this.setState( { display: ((parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)) / 100).toPrecision().slice(0,11) } );

        console.log(val);
        console.log('Equal');
        console.log((parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)) / 100)

        localStorage.setItem('operator', JSON.stringify(...val, val))
        localStorage.setItem('equalTo', JSON.parse((parseFloat(this.state.firstNum) *  
        parseFloat(this.state.secondNum)) / 100));
    }
    else {  
      localStorage.setItem('answer', JSON.parse(Math.sqrt(this.state.firstNum))); 
      this.setState( { display: (Math.sqrt(this.state.firstNum)).toPrecision().slice(0,11) } );

      console.log(val);
      console.log('Equal');
      console.log(Math.sqrt(this.state.firstNum));
    }
  };

   render() {
    return (
      <div className="App">
          <div className="Container">
            <Display> { this.state.display } </Display>
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
