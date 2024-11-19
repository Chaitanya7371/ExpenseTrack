export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE'

export const addExpense = (item) => ({
    type : ADD_EXPENSE,
    payload : item
})

export const deleteExpense = (itemId) => ({
    type : DELETE_EXPENSE,
    payload : itemId
})