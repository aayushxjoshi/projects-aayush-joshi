import express from "express";

const app = express()

app.use(express.json())

app.get("/healthcheck", (req, res) => {
    res.send({
    	message: "Server Up and Runnning"
    })
})

app.listen(3002, () => {
    console.log("Server Up and Running at Port 3000")
})
