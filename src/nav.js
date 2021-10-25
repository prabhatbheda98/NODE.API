const express=require("express");
const app = express();
const port = 2000;

app.get("/",(req,res)=>{
    res.status(200).send("hello prabhat home page")
});

app.get("/about",(req,res)=>{
    res.status(200).send("hello mohit about page")
});
app.get("/contact",(req,res)=>{
    res.status(200).send("hello kanani contact page")
});
app.get("/login",(req,res)=>{
    res.status(200).send([
       { id:1,
        name:"parth",
       },
       { id:2,
        name:"mohit",
       },
       { id:3,
        name:"manoj",
       },
     ] );
});
app.listen(port,()=>{
    console.log(`this appliction port is ${port}`);
});