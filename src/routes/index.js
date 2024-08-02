const { Router } = require("express");
const categoryRouter = require("../modules/categories/routes");
const filesRouter = require("../modules/files/routes");

const router = Router();

router.use("/categories", categoryRouter)
router.use("/files", filesRouter)

module.exports = router
