const { getstudent, createStudent, updatestudent,deletestudent } = require("../controller/student");

const router =require("express").Router();

router.get("/", getstudent);

router.post("/",createStudent);

router.put("/:id",updatestudent);

router.delete("/:id",deletestudent);



module.exports=router;