const initialUserState = {
    allTweets:[],
    displayCount:'',
    sortBy:'favorite_count'
}

export default function(state=initialUserState,action){
    switch(action.type){
        // Retrives the action GET_TWEETS and updates the data into the store
        case 'GET_TWEETS':
        {
            state.allTweets = action.payload ;
            const sortedData = state.allTweets.sort((a,b) => b[state.sortBy]-a[state.sortBy])
            return {...state,allTweets:sortedData}
        }
        // Retrives the action SORT_BY and updates the data into the store
        case 'SORT_BY':
        {
            state.sortBy = action.payload ;
            const sortedData = state.allTweets.sort((a,b) => b[state.sortBy ]-a[state.sortBy ])
            return {...state,allTweets:sortedData}
        }
        // Retrives the action DISPLAY_COUNT and updates the data into the store
        case 'DISPLAY_COUNT':
        {
            return {...state,displayCount:action.payload}
        }
        
        default:
            return state
    }
}