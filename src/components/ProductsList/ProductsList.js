import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { FilterContext } from "../../context/filterContext";

import "./ProductsList.css";

const ProductsList = () => {
  const { filteredProducts } = useContext(FilterContext);
  return (
    <div className="products-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>Sorry No such Product exists, Clear Filters and Try Again</p>
      )}
    </div>
  );
};

export default ProductsList;
