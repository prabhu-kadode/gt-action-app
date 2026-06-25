const express = require("express")

const app = express()

app.get("/health",(req,res)=>{
    res.status(200).send({
        success:true,
        status:'ok',
        statusCode:200
    })
})
app.listen(8000,()=>{
    console.log("server running at 8000")
})

