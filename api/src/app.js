const express = require("express");
require("./db/conn"); 
const routes =require("./routes")
const app = express();
var cors = require('cors')
const port= process.env.PORT  || 2500;
const errorHandle =require("./lib/errorHandle")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use("/",routes)
app.use(errorHandle)

app.listen(port,()=>{
        console.log(`connection is setup at ${port}`);
})  