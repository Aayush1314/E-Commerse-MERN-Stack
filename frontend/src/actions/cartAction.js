import axios from 'axios'

export const cartAction =  (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: "CART_ADD_ITEM",
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems) )

}

export const cartActionDelete =  (id) => (dispatch,getState)=> {
    
    dispatch({
        type: "CART_DELETE_ITEM",
        payload: {
            product: id
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))


}