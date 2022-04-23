import './App.css';
import {Header} from './components/Header';
import {MainProducts} from './components/MainProducts';
import {Sidebar} from './components/Sidebar';
import {useState} from "react";

function App() {

  const [category, setCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <div className="App">
      <Header inputTransfer = {setSearchInput}/>
    <div className='main'>
      <Sidebar filterCategory={setCategory}/>
      <MainProducts category={category} searchInput = {searchInput}/>
    </div>
    </div>
  );
}

export default App;
