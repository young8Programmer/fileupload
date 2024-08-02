const { Router } = require("express");
const { getCategory, crateCategory } = require("./controller");


let categoryRouter = Router()

categoryRouter.get("/", getCategory);
categoryRouter.post("/", crateCategory);


module.exports = categoryRouter