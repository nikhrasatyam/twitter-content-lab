const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express()
var Twitter = require('twitter');
var twitter = new Twitter(config.TWITTER);
app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../client/build` ) );

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})


app.post('/api/getTweets', (req,res)=>{
  const hashtags = req.body.hashtag.split(',');
  if (hashtags.length > 0)
  {
    var final = [] ;
    var count = 0;
    hashtags.forEach((hashtag) =>{
      let params = {q : hashtag,count:req.body.display } ;
      twitter.get('/search/tweets',params ,function(error, tweets, response) {
        if(error) throw error;
        var result = tweets.statuses.map((tweet) =>{
        const {id,text,favorite_count,retweet_count} = tweet
           return ({id, text , favorite_count , retweet_count })
         })
         final = final.concat(result)
         count += 1;
         if (count === hashtags.length){
            final.display = req.body.display;
            return res.send(final);
         }
      });
    })

  }
  else{
  const params = {q :req.body.hashtag,count:req.body.display}
  twitter.get('/search/tweets',params ,function(error, tweets, response) {
  if(error) throw error;
  var result = tweets.statuses.map((tweet) =>{
  const {id,text,favorite_count,retweet_count} = tweet
     return ({id, text , favorite_count , retweet_count })
   })
  return res.send(result)
});
  }
})


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log('SERVER RUNNING')
})
