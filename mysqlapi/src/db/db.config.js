module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'api',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acuire: 20000,
        idle: 10000
    }
}