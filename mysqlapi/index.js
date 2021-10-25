const express = require("express")

const app = express();
const port = process.env.PORT || 3500;
const routes = require("./src/routes");

const db = require("./src/models");
db.sequelize.sync();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes)
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.listen(port, () => {
    console.log(`connection is succesfully ${port}`);
})