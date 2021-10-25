// const Employee = require("../models/employee");
const db = require("../models")
const Employee = db.employee;
const Op = db.sequelize.Op;


exports.get = (req, res) => {
    Employee.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            message: err.message
        })
    })
};

exports.getid = (req, res) => {
    const id = req.params.id;
    Employee.findByPK(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            message: err.message
        })
    })
}

exports.addemployee = (req, res) => {
    const employe = {
        fname: req.body.fname,
        age: req.body.age,
        city: req.body.city,
        salary: req.body.salary
    }
    Employee.create(employe).then(data => {
        res.send(data);
    }).catch(err => {
        res.send({ message: err.message })
    })
}

exports.updateemployee = (req, res) => {
    const id = req.params.id;
    Employee.update(req.body, {
        where: { id: id }
    }).then(val => {
        if (val == 1) {
            res.send({ message: "employee are updated sucessfuuly" });

        } else {
            res.send({ message: "User ID : " + id + " is not Found.!" })

        }
    }).catch(err => {
        res.send({
            message: err.message
        })
    })
}
exports.deleteemployee = (req, res) => {
    const id = req.params.id;
    Employee.destroy({
        where: { id: id }
    }).then(val => {
        if (val == 1) {
            res.send({ message: "employee are deleted" });
        } else {
            res.send({ message: "User ID : " + id + " is not Found.!" });
        }
    }).catch(err => {
        res.send({
            message: "Could not delete user with id=" + id
        })
    })
}