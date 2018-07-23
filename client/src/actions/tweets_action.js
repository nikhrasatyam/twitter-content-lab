import axios from 'axios' ;
//Fetches data from twitter api running on server
export function getTweets(data) { 
    const request = axios.post('/api/getTweets',data)
        .then(response => response.data)
    return {
        type: 'GET_TWEETS',
        payload: request
    }
}
// retrieves sortby dropdown value and send it to reducer
export function sortBy(data) {
    return {
        type: 'SORT_BY',
        payload: data
    }
}
//retrives display count value and send it to reducer
export function displayCount(data){
    return {
        type: 'DISPLAY_COUNT',
        payload: data
    }
}