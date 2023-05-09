import Express from "express"

const app = Express()
const PORT  = process.env.PORT || 5173
import redis from "redis"

redis.createClient("redis")











app.listen(PORT , ()=>{
    console.log("Server is listening...")
})


