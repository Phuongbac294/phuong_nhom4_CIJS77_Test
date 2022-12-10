// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './header';
import Add from './add';
import Active from './active';
import Completed from './completed';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">#TODO</h1>
        <Header/>
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/active' element={<Active />} />
          <Route path='/completed' element={<Completed />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
