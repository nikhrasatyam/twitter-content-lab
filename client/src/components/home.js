import React from 'react' ;
import TwitterData from '../containers/twitter-data'
import SearchTweet from '../components/search-form'


 const Home = () => {
     
     return (
         <div>
             <div className="container">
             <SearchTweet />
             <hr />
             <TwitterData />
             </div>
             
         </div>
     )
}

export default Home