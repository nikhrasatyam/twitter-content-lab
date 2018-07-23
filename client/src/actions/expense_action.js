import axios from 'axios'
import FormData from 'form-data'



export function getExpense() {
    const request = axios.get('/api/getExpense')
        .then(response => response.data)
    return {
        type: 'GET_EXPENSE',
        payload: request
    }
}

export function updateExpense(event){
    const request = axios.put('/api/updateExpense',event)
    .then(response => {
        return response.data
    })
    return {
        type:'UPDATE_EXPENSE',
        payload:request
    }
}

export function deleteExpense(expenseId) {
    const request = axios.delete(`/api/deleteExpense?expenseId=${expenseId}`)
        .then(response => response.data)
    return {
        type: 'DELETE_EXPENSE',
        payload: request
    }
}