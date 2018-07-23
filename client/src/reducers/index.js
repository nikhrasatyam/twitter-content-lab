import { combineReducers } from 'redux'
import tweets from './tweets_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    tweets: tweets,
    form : formReducer
})

export default rootReducer