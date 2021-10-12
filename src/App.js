import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import General from './components/General';
import ProfSum from './components/ProfSum';
import WorkHist from './components/WorkHist';
import Edu from './components/Edu';

function App() {
  return (
    <div className="App">
      <General />
      <ProfSum />
      <WorkHist />
      <Edu />
    </div>
  );
}

export default App;
