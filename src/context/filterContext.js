import React, { useEffect, useReducer } from "react";
import {
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/actions";
import { mockProducts } from "../mockData/mockProducts";
import { filterReducer } from "../reducer/filterReducer";

export const FilterContext = React.createContext();

const intialState = {
  allProducts: mockProducts,
  filteredProducts: [],
  filters: {
    size: "",
    category: "",
    brand: "",
    sort: "",
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, intialState);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const updateFilters = (e) => {
    const name = e.target.name;
    const value = e.target.innerText;
    console.log(name, value);
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
