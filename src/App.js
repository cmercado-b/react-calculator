import logo from './logo.svg';
import './App.css';

import Calculator from './themes/Calculator'; 
import Output from './themes/Output'; 

function App() {
  return (
    <div className="App">
      <Output />
      <Calculator />
    </div>
  );
}

export default App;
