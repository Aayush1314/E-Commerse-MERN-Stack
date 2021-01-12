import axios from 'axios'
export const loginAction = ( email,password )=> async (dispatch) => {

    try {
        dispatch({
            type: "LOGIN_REQUEST"
        })
        let config = {
            headers: {
              'Content-type': 'application/json',
            }
        }        
        const { data } = await axios.post("/api/users/login", {email,password}, config)
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          });
    }
    
}

export const logoutAction = ()=> async (dispatch) => {
    dispatch({
        type: "LOGOUT"
    })
    localStorage.setItem("userInfo", '')

}