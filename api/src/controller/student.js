const Student = require("../models/student");
const Boom = require("boom")

exports.getstudent = async(req, res) => {
    try {
        const student = await Student.find({});
        return res.send(student)
    } catch (error) {
        return next(Boom.badRequest("data not found", error))
    }
}
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.send(student);

    } catch (error) {
        return next(Boom.badRequest("data not found", error))
    }
}
exports.updatestudent = async (req, res) => {
    try {   
        const id = req.params.id;
        const student = await Student.findByIdAndUpdate(id, req.body);

        res.send("student update successful");
    } catch (error) {
        return next(Boom.badRequest("data not found", error))
    }
}
exports.deletestudent =async (req,res) =>{
    try {
        const id =req.params.id;
        const student =await Student.findByIdAndDelete(id);
        res.send("student data delete")
    } catch (error) {
        return next(Boom.badRequest("data not found", error))
    }
}