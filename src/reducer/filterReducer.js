import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
} from "../actions/actions";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      let temporaryProducts = [...state.allProducts];
      if (state.filters.category) {
        temporaryProducts = temporaryProducts.filter(
          (product) => product.category === state.filters.category.toLowerCase()
        );
      }
      if (state.filters.size) {
        temporaryProducts = temporaryProducts.filter((product) => {
          if (product.sizes.indexOf(state.filters.size.toLowerCase()) !== -1) {
            return product;
          }
        });
      }
      if (state.filters.brand) {
        temporaryProducts = temporaryProducts.filter(
          (product) => product.brand === state.filters.brand.toLowerCase()
        );
      }
      if (state.filters.sort) {
        if (state.filters.sort.toLowerCase() === "high-to-low") {
          temporaryProducts.sort((a, b) => b.price - a.price);
        }
        if (state.filters.sort.toLowerCase() === "low-to-high") {
          temporaryProducts.sort((a, b) => a.price - b.price);
        }
      }

      return { ...state, filteredProducts: temporaryProducts };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredProducts: state.allProducts,
        filters: {
          size: "",
          category: "",
          brand: "",
          sort: "",
        },
      };

    default:
      return state;
  }
};
