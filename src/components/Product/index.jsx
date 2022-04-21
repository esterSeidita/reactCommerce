import "./styles.css";

export const Product = ({title, img, price}) => {
  return (  
  <div className="product">
      <img src={img} alt="Product Image"/>
      <div className="productInfo">
        <h2>{title.split("").slice(0, 30).join("")}...</h2>
        <p>{price}€</p>
      </div>
  </div>
  )
};
