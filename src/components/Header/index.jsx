import "./styles.css";
import logo from './../../logo.svg'
import {useState} from "react";
import {FaShoppingCart, FaUser} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
import { IconContext } from "react-icons";


export const Header = ({inputTransfer}) => {
    const [searchInput, setSearchInput] = useState("");

    const getInput = (e) => {
        const input = e.target.value;
        setSearchInput(input);
        inputTransfer(input);
    }

    return(
    <header>
        <div className="logo-wrap">
            <img src={logo}/>
            <h1 className="logo">reactCommerce</h1>
        </div>


        <div className="iconsWrapper">
            <form>
                <input type="text" value={searchInput} onChange={getInput} placeholder="Search..."/>
                <button onClick={(e) => e.preventDefault()} type="submit">
                    <IconContext.Provider value={{ color: "var(--bgColor)"}}>
                        <FiSearch/>
                    </IconContext.Provider>
                </button>
            </form>
            
            <IconContext.Provider value={{ color: "var(--mainColor)", className: "icons" }}>
            <div className="iconsWrap">
                <FaShoppingCart/>
                <FaUser/>
            </div>
            </IconContext.Provider>

        </div>
 
    </header>
    )
}