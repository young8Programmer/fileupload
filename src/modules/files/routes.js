const { Router } = require("express");
const { getme } = require("./controller");

let filesRouter = Router()

filesRouter.get("/:name", getme);

module.exports = filesRouter