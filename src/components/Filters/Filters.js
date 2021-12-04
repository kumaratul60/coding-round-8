import React, { useContext } from "react";
import { FilterContext } from "../../context/filterContext";
import "./Filter.css";

const Filters = () => {
  const { filters, clearFilters, updateFilters } = useContext(FilterContext);

  const categories = ["men", "women"];
  const brand = ["zara", "nike", "wildstore"];
  const sizes = ["s", "m", "l", "xl"];
  const sortList = ["high-to-low", "low-to-high"];

  return (
    <div>
      <h4>Filters</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <h5>For:</h5>
          {categories.map((categoryItem) => {
            return (
              <button
                name="category"
                onClick={updateFilters}
                className={`filter-btn  ${
                  categoryItem === filters.category.toLowerCase()
                    ? "active"
                    : ""
                }`}
              >
                {categoryItem}
              </button>
            );
          })}
        </div>

        <div className="form-control">
          <h5>Brand</h5>
          {brand.map((brandItem) => {
            return (
              <button
                name="brand"
                onClick={updateFilters}
                className={`filter-btn  ${
                  brandItem === filters.brand.toLowerCase() ? "active" : ""
                }`}
              >
                {brandItem}
              </button>
            );
          })}
        </div>

        <div className="form-control">
          <h5>Sizes</h5>
          {sizes.map((sizeItem) => {
            return (
              <button
                name="size"
                onClick={updateFilters}
                className={`filter-btn  ${
                  sizeItem === filters.size.toLowerCase() ? "active" : ""
                }`}
              >
                {sizeItem}
              </button>
            );
          })}
        </div>
        <h4>Sort By</h4>
        <div className="form-control">
          {sortList.map((sortItem) => {
            return (
              <button
                name="sort"
                onClick={updateFilters}
                className={`filter-btn  ${
                  sortItem === filters.sort.toLowerCase() ? "active" : ""
                }`}
              >
                {sortItem}
              </button>
            );
          })}
        </div>
      </form>
      <button className="btn clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
