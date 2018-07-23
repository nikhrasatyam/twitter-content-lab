import React, { Component } from 'react'
import { connect } from "react-redux"

class TwitterData extends Component 
{
    //Render the data retrieved from the store
    renderTweets = (tweets) =>{
           return tweets.map((tweet,i) => (              
               <div class="row" key={i}>
                   <p><b>{i + 1}.{tweet.text}</b></p>
                   <div class="col-md-6">
                       <p> Favorite Count : {tweet.favorite_count}</p>
                   </div>
                   <div class="col-md-6">
                       <p> Retweet Count : {tweet.retweet_count}</p>
                   </div>
               </div>             
           ))        
    }
    
    render()
    {
        //store the data retrieved from the store and stores it into variables
        const {allTweets,displayCount} = this.props.tweets ;
        const slicedTweets = allTweets.slice(0,displayCount)
        
        return(
            <div>
                {this.renderTweets(slicedTweets)}
            </div>
        );
    }
}
//Fetches tweets data from the store 
const mapStateToProps = (state) => {
    return {
        tweets: state.tweets  
    }
}
export default connect (mapStateToProps) (TwitterData) ;
