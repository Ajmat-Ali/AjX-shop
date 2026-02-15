const initialQuery = {
  sortBy: "new",
  category: "all",
  search: "",
  minRating: {
    rating_5: false,
    rating_4: false,
    rating_3: false,
  },
  priceRange: {
    min: 0,
    max: 1000,
  },
};

const filterReducer = (state, { type, data: { key, value } }) => {
  switch (type) {
    case "SORTBY": {
      return { ...state, [key]: value };
    }
    case "CATEGORY": {
      return { ...state, [key]: value };
    }
    case "SEARCH": {
      return { ...state, [key]: value };
    }
    case "APPLYFILTER": {
      return {
        ...state,
        minRating: { ...state.minRating, ...value.minRating },
        priceRange: { ...state.priceRange, ...value.priceRange },
      };
    }
    case "PRICERANGE": {
      return { ...state, priceRange: { ...state.priceRange, [key]: value } };
    }
    default: {
      throw Error("Unknown Action: " + type);
    }
  }
};

export { initialQuery, filterReducer };
