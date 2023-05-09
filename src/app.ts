import Express from "express"

const app = Express()
const PORT  = process.env.PORT || 5173
import * as redis from "redis"


const redisUrl:any = "redis://127.0.0.1:6379"
const client:redis.RedisClientType = redis.createClient({url:redisUrl});

app.use(Express.json())

app.get("/" , (_req , res) => {
    res.json({message:"PONG"})
})


app.post("/" , async (req , res) => {
    const {key , value} = req.body
    console.log(key, value)
    let response 
    try {
        response = await client.set(key , value)
        console.log(response)
        return res.json(response)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
})

client.on('ready', () => {
  console.log('Redis client is ready');
});

app.listen(PORT ,async ()=>{
    console.clear()
    await client.connect();
    console.log("Server is listening and redis is connected...")
})


