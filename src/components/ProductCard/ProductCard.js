import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price, image }) => {
  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-image" />

      <div className="product-info">
        <h5>{title}</h5>
        <p>Price : ${(price * 20).toFixed(1)}</p>
      </div>
    </article>
  );
};

export default ProductCard;
