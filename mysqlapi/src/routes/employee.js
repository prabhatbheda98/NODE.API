
const router = require("express").Router();
const employee = require('../controllers/employee')


router.get('/', function (req, res) {
    res.json({ message: "welcome to mysql" })
})

router.get('/', employee.get);

router.get('/:id', employee.getid);

router.post('/', employee.addemployee);

router.put('/:id', employee.updateemployee);

router.delete('/:id', employee.deleteemployee);




module.exports = router;

