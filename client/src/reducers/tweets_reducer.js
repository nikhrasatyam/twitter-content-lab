const initialUserState = {
    allTweets:[],
    displayCount:'',
    sortBy:'favorite_count'
}

export default function(state=initialUserState,action){
    switch(action.type){

        case 'GET_TWEETS':
        {
            state.allTweets = action.payload ;
            const sortedData = state.allTweets.sort((a,b) => b[state.sortBy]-a[state.sortBy])
            return {...state,allTweets:sortedData}
        }

        case 'SORT_BY':
        {
            state.sortBy = action.payload ;
            const sortedData = state.allTweets.sort((a,b) => b[state.sortBy ]-a[state.sortBy ])
            return {...state,allTweets:sortedData}
        }

        case 'DISPLAY_COUNT':
        {
            //console.log(action.payload)
            return {...state,displayCount:action.payload}
        }
        
        
        default:
            return state
    }
}