import React from 'react';
import './App.css';
import PersonCard from './components/FunctionalComponent';

function App() {
  return (
    <div>
    <PersonCard firstName="John" lastName="Doe" age={5} hairColor="Blue"/>
    <PersonCard firstName="Jenny" lastName="Doe" age={16} hairColor="Purple"/>
    <PersonCard firstName="Jeff" lastName="Darn" age={15} hairColor="Blonde"/>
    <PersonCard firstName="Josh" lastName="Darn" age={54} hairColor="Brown"/>
    </div>
  );
}

export default App;
