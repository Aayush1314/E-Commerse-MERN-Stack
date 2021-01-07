export const productReducer = (state={ products: [] }, action) => {
    
        switch(action.type){
            case "PRODUCT_LIST_REQUEST":
                return ({products:[], loading:true})
            case "PRODUCT_LIST_SUCCESS":
                return ({products: action.payload, loading: false})
            case "PRODUCT_LIST_FAIL":
                return ({error: action.payload, loading: false})
            default:
                return state
        }   
}

export const singleProductReducer = (state={product:[]}, action)=>{
    switch(action.type){
        case ("SINGLE_PRODUCT_REQUEST"):
            return {product:[], loading:true}
        case ("SINGLE_PRODUCT_SUCCESS"):
            return {product:action.payload, loading: false}
        case ("SINGLE_PRODUCT_FAIL"):
            return {error: action.payload, loading:false}  
        default:
            return state  
    }
}