export const setHeaderStatus = value => {
  return { type: "SET_HEADER_STATUS", payload: value };
};

export const setFooterStatus = value => {
  return { type: "SET_FOOTER_STATUS", payload: value };
};

export const setNavBarStatus = value => {
  return { type: "SET_NAVBAR_STATUS", payload: value };
};

export const setCartItemsOnHeader = items => {
  return { type: "SET_CART_ITEMS", payload: items };
};

export const setUserDetails = userInfo => {
  return { type: "SET_USER_DETAILS", payload: userInfo };
};

export const clearCartItemsOnHeader = items => {
  return { type: "CLEAR_CART_ITEMS", payload: items };
};

export const setStoreData = items => {
  return { type: "SET_STORE_DATA", payload: items };
};

export const getStoreData = () => {
  return { type: "GET_STORE_DATA", payload: {} };
};
