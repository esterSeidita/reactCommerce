import "./styles.css";
import {useState, useEffect} from "react";

const wordToUpper = (text) => {
    const result = text
    .split(" ")
    .map(word=>(
        word.charAt(0).toUpperCase()
        + word.slice(1))).join(" ");
    return result;
}

export const Sidebar = () =>{ 

    const [categories, setCategories] = useState([]);
    const [ display, setDisplay ] = useState( 'none' );
    const [ toggle, setToggle ] = useState( 'open' );

    const getCategories = async() => {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(data);
    }

    const openMenu = () => {        
        display === 'none' ? setDisplay( 'block' ) : setDisplay( 'none' );
        toggle === 'open' ? setToggle( 'close' ) : setToggle ( 'open' );
    }

    useEffect(() => {getCategories()}, []);

    return (
        <>
            <nav className="dropdown" onClick={openMenu}>
                <div className="navHeader">
                    <h2>Categories</h2>
                    <span className="navToggle" id={toggle}></span>
                </div>
                <ul className="navList" style={{display:display}}>
                    {categories.map((element, index) => <li key={index}>{wordToUpper(element)}</li>)}
                </ul>
            </nav>
            <aside >
                <div className="asideHeader">
                    <h2>Categories</h2>
                    <hr/>
                </div>
                <ul className="navList">
                    {categories.map((element, index) => <li key={index}>{wordToUpper(element)}</li>)}
                </ul>
            </aside>
        </>
    )
}
