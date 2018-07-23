import axios from 'axios' ;

export function getTweets(data) {
    const request = axios.post('/api/getTweets',data)
        .then(response => response.data)
    return {
        type: 'GET_TWEETS',
        payload: request
    }
}

export function sortBy(data) {
    return {
        type: 'SORT_BY',
        payload: data
    }
}

export function displayCount(data){
    return {
        type: 'DISPLAY_COUNT',
        payload: data
    }
}