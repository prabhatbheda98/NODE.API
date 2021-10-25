const express =require("express");
const path =require("path");
const app = express();


const staticpath = path.join(__dirname,"../public");
const viewpath = path.join(__dirname,"../views");
//middale wear
app.set("view engine",'hbs');
app.set("views",viewpath);
// app.use(express.static(staticpath));


app.get("/",(req,res) => {  
     res.render('index');
});

app.get("/about",(req,res) =>{
    res.send("hello about ")
});

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(8000,()=>{
    console.log("listing the port 8000");
});
