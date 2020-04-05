import React  from 'react';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App(){
  return (
    <div className="App">
    <Counter />
      {/* <Message /> */}
      {/* <Greet name="joao">coisa no meio </Greet>
      <Hello /> */}
    </div>
  );
}

export default App;
