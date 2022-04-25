import "./styles.css";
import {FaCartPlus} from "react-icons/fa"
import { IconContext } from "react-icons";



export const Product = ({title, img, price}) => {
  return (  
  <div className="product">
      <img src={img} alt="Product Image"/>
      <div className="productInfo">
        <h2>{title.split("").slice(0, 30).join("")}...</h2>
        <p>{price}€</p>
      </div>
        <IconContext.Provider value={{ color: "var(--bgColor)", className: "icons" }}>
          <button>Add <FaCartPlus/></button>
        </IconContext.Provider>
  </div>
  )
};
