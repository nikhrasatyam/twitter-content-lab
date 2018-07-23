const initialUserState = {
    allExpense:[]
}

export default function(state=initialUserState,action){
    switch(action.type){

        case 'ADD_EXPENSE':
            return {...state,
                allExpense:[...state.allExpense,action.payload]}

        case 'GET_EXPENSE':
            return {...state,allExpense:action.payload}
        
        case 'DELETE_EXPENSE':
            return{...state,
                allExpense:state.allExpense.filter(item => action.payload !== item._id)
            }
        default:
            return state
    }
}
