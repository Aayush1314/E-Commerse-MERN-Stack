import axios from "axios";
export const listProducts = () => {
  return async (dispatch) => {
    try {

      dispatch({ type: "PRODUCT_LIST_REQUEST" });
      const { data } = await axios.get("/api/products");

      dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });

    } catch (error) {

      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };
};


export const singleProduct = (id) => {
  return async (dispatch) =>{
    try {
      dispatch({type: "SINGLE_PRODUCT_REQUEST"})
      
      const {data} = await axios.get(`/api/products/${id}`)

      dispatch({ type: "SINGLE_PRODUCT_SUCCESS" , payload: data })
    
    } catch (error) {
      dispatch({
        type: "SINGLE_PRODUCT_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
    
  }
}