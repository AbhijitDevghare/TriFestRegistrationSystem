const app=require("./app.js")

const PORT=process.env.PORT || 8081;

app.listen(PORT,(req,resp)=>{
    console.log(`The server is running on the port ${PORT}`)

})  