module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER
        },
        city: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.INTEGER
        }
    })
    return Employee;
}
