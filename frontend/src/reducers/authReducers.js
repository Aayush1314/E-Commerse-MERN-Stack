export const loginReducer = (state={}, action) => {
    
    switch(action.type){
        case "LOGIN_REQUEST":
            return ({ loading:true})
        case "LOGIN_SUCCESS":
      
            return ({currUser: action.payload, loading: false})
        case "LOGIN_FAIL":
            console.log(action, 1)
            return ({error: action.payload, loading: false})
        case "LOGOUT":
            console.log(action)
            return({})
        default:
            return state
    }   
}