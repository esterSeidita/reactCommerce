import "./styles.css";
import logo from './../../logo.svg'
import {useState} from "react";

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

        <form>
            <input type="text" value={searchInput} onChange={getInput} placeholder="Search..."/>
            <button onClick={(e) => e.preventDefault()} type="submit">Submit</button>
        </form>
    </header>
    )
}