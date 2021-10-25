const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api",{useNewUrlParser :true ,useUnifiedTopology :true})
.then(()=>{
    console.log("connection set up")
}).catch((e)=>{
    console.log("no connetion", e);
})
