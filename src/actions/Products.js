import {get} from './BaseApi';

export const getProducts = type => async dispatch => {
  let url = "http://104.154.92.99/search?category1=";
  if (type.subCategory) {
    if(type.subCategory=="All")
        {              
              url = `${url}${type.category}`;
        }
      else{    
          url = `${url}${type.category}&category2=${type.subCategory}`;
      }  
  } else {
    url = `${url}${type.category}`;
  }
  const res = await get(url);
  dispatch({ type: "PRODUCTS", payload: res.data.products });
};

export const clearProducts=()=>({type:"CLEARPRODUCTS"})