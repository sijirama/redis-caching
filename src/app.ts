import Express from "express"

const app = Express()
const PORT  = process.env.PORT || 5173
import redis , {RedisClientType} from "redis"


const redisUrl = "redis://127.0.0.1:6379"
const client:RedisClientType = redis.createClient({url:redisUrl})


app.use(Express.json())

app.post("/" , (req , _res) => {
    const {key , value} = req.body
    client.set(key , value)
})





app.listen(PORT , ()=>{
    console.log("Server is listening...")
})


