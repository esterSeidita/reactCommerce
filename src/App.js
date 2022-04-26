import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {MainProducts} from './components/MainProducts';
import {Sidebar} from './components/Sidebar';
import {useState} from "react";

function App() {

  const [category, setCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [productInCart, setProductInCart] = useState([]);
  
  return (
    <div className="App">
      <Header inputTransfer = {setSearchInput}/>
    <div className='main'>
      <Sidebar filterCategory={setCategory}/>
      <MainProducts setProductInCart={setProductInCart} category={category} searchInput = {searchInput}/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
