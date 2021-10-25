const mongoose =require("mongoose");
const validator = require("validator");

const studentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")

            }
        }
    },
    phone:{
        type:Number,
    },
    address:{
        type:String
    }
})

const Student = new mongoose.model("student", studentschema);
module.exports=Student;
