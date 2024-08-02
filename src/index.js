const express = require("express");
const fileupload  = require("express-fileupload");
const router = require("./routes/index")
const app = express()

app.use(express.json())
app.use(fileupload())
app.use(router)


app.listen(9000, () => {
    console.log(9000);
})