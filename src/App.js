import './App.css';
import {Header} from './components/Header';
import {MainProducts} from './components/MainProducts';
import {Sidebar} from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className='main'>
      <Sidebar/>
      <MainProducts/>
    </div>
    </div>
  );
}

export default App;
