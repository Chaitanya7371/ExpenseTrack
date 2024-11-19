import { ADD_EXPENSE , DELETE_EXPENSE } from "./actions";

const initialState = {
    expenses: []
}

const expenseReducer = (state = initialState , action) => {
    console.log(action , "from");
    
    switch(action.type){
        case ADD_EXPENSE:
            return {
                ...state,                
                expenses: [...state.expenses , action.payload]
            }
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(item => item.id != action.payload)
            }
        default:
            return state;
    }
}

export default expenseReducer;