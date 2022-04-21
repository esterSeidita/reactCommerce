import "./styles.css";
import logo from './../../logo.svg'

export const Header = () => (
    <header>
        <div className="logo-wrap">
            <img src={logo}/>
            <h1 className="logo">reactCommerce</h1>
        </div>
        <form>
            <input type="text" placeholder="Search..."/>
            <button type="submit">Submit</button>
        </form>
    </header>
)