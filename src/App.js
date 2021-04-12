import React, { Component } from 'react';
import './App.css';

import Button from './Button/Button.js';
import Display from './Display/Display.js';

function App() {

  const rowStyle = {
    display: 'flex',
    width: '100%',
  };

  return (
    <div className="App">
        <Display />
          <div style={rowStyle}>
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
          <div style={rowStyle}>
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
          <div style={rowStyle}>
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
          <div style={rowStyle}>
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
    </div>
  );
}

export default App;
