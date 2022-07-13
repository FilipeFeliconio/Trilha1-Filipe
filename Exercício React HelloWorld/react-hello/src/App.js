import './App.css';

import FirstHello from './components/FirstHello';

function clickTeste(){
  alert('Hello World!')
}

function App() {
  return (
    <div className="App">
       <h1>1.Hello World</h1>
       <button onClick={clickTeste}>
        2
       </button>
       <FirstHello />
    </div>
  );
}

export default App;
