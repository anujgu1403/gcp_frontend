export default (state = { products: [], storeData: "" }, action) => {
  alert("search reducer: ", action.payload);
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "SEARCHRESULTS":
      return {
        ...state,
        searchProducts: { ...action.payload },
        isLoading: false
      };
    case "SEARCHRESULTS1":
      return {
        ...state,
        searchProducts: { ...action.payload },
        isLoading: false
      };
    case "SEARCHRESULTSAI":
      return { ...state, products: action.payload };

    case "SET_STORE_DATA_ON_SEARCH":
      return { ...state, storeData: action.payload };

    case "CLEARSEARCH":
      return { ...state, searchProducts: {}, isLoading: false };
    default:
      return state;
  }
};
