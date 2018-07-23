const config = {
    production:{
        DATABASE:process.env.MONGODB_URI

    },
    default:{
        TWITTER :{
            consumer_key: 'v3UZY5qi4Kf3R0xxEdJOZM5O3',
            consumer_secret: 'jugK1HNUhEIvgPwdEpvoidBaL2dwcnJzZzFtxbSb0muMr2SyUI',
            bearer_token: 'AAAAAAAAAAAAAAAAAAAAAIY87wAAAAAApwLcezyu4QVyk1zrMLeEUrI9ot4%3DHtko3chJwD8GtzMzDRZEKwyDbT7YRhMN3dSDDFuGrD222ueIc1'
        }
    }
}

exports.get = function get (env)
{
    return config[env] || config.default
}