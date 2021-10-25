const { response } = require("express");
const mongoose = require("mongoose");

//connect 
mongoose.connect("mongodb://localhost:27017/ttchanell", { useNewUrlParser: true, useUnifiedTopology:true,userCreateIndex:true})
    .then(() => console.log("conneion sucessfully"))
    .catch((err) => console.log(arr));

//cerete database Schema
const DemoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lname: {
        type:String,
        required:true
    }, 
    age: Number,
    city: String

})  

//crete collections
const text = new mongoose.model("text", DemoSchema)

//insert databse
const createDocument = async () => {                    
    try {
        const reacttext = new text({
            name: "parth",
            lname: "kanani",
            age: 26,
            city: "amd"
        })
        const jstext = new text({
            name: "roshni",
            lname: "patel",
            age: 28,
            city: "surat"
        })
        const demo = new text({
            name: "avni",
            lname: "hingu",
            age: 23,
            city: "vadodra"
        })
        const data = new text({
            name: "prabaht",
            lname: "bheda",
            age: 23,
            city: "surat"
        })
        const result = await text.insertMany([reacttext,jstext,demo,data]);
        console.log(result)
    }
    catch (error) {
        console.log(error);
    }
}
// createDocument();
 
const getDocument =async ()=>{
    try {
        const result = await text.find({ctype:"data"})
    .select({name:1}).limit(1);
    console.log(result);
        
    } catch (error) {
        console.log(errro)
    }
}
// getDocument();

const getDocument1=async ()=>{
    try {
        const result = await text.find({age:{$gt:24}}).select({name:1});
      console.log(result);
        
    } catch (error) {
        console.log(errro)
    }
}
// getDocument1();

const getDocument2=async ()=>{
    try {
        const result = await text.find({city:{$in:["surat","amd"]}}).select({name:1});
      console.log(result);
        
    } catch (error) {
        console.log(errro)
    }
}
// getDocument2();
const getDocument3=async ()=>{
    try {
        const result = await text.find({$or:[{lname:"patel"},{age:23}]});
      console.log(result);
        
    } catch (error) {
        console.log(errro)
    }
}
// getDocument3();

const updatedocument = async(_id)=>{
    try {
        const result = await text.updateOne({_id},{$set:{name:"sumit"}});
        console.log(result);
    } catch (error) {
       console.log(error); 
    }

}
// updatedocument("61669fbce5d3e099870849b1");

const deletedocument=async ()=>{
    try {
        const result = await text.deleteOne({name:"parth"});
    console.log(result);   
    } catch (error) {
        console.log(error)
    }

}
deletedocument();