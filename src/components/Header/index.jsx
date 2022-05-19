import "./styles.css";
import logo from "./../../logo.svg";
import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export const Header = ({ cartProducts, inputTransfer }) => {
  const [searchInput, setSearchInput] = useState("");

  const getInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    inputTransfer(input);
  };

  return (
    <header>
      <div className="logo-wrap">
        <img src={logo} />
        <h1 className="logo">reactCommerce</h1>
      </div>

      <div className="iconsWrapper">
        <form>
          <input
            type="text"
            value={searchInput}
            onChange={getInput}
            placeholder="Search..."
          />
          <button
            className="searchBtn"
            onClick={(e) => e.preventDefault()}
            type="submit"
          >
            <FiSearch />
          </button>
        </form>

        <div className="iconsWrap">
          <div className="CartIconWrapper">
            <FaShoppingCart />
            {cartProducts.length > 0 && (
              <span className="CartNumber">{cartProducts.length}</span>
            )}
          </div>
          <div>
            <FaUser />
          </div>
        </div>
      </div>
    </header>
  );
};
