const config = {
    production:{
        DATABASE:process.env.MONGODB_URI,
        TWITTER :{
            consumer_key: process.env.consumer_key,
            consumer_secret: process.env.consumer_secret,
            bearer_token: process.env.bearer_token
        }

    },
    default:{
        
    }
}

exports.get = function get (env)
{
    return config[env] || config.default
}