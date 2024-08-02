const { redFile, writeFile } = require("../../utils/fs")
const path = require("path")

const getCategory = (req, res) => {
    try{
        let categories = redFile("categories")
        res.send({
            success: true,
            data: categories
        })
    }catch (error){
        res.status(error.status || 409).send({
            success: false,
            data: error.message
        })
    }
};


const crateCategory = (req, res) => {
    try{
        let categories = redFile("categories");
        let body = req.body;
        if (categories.find(el => el.name === body.name)) {
            res.status(error.status || 409).send({
                success: false,
                data: "Bu ma'lumot mavjud"
            })
        }

        let images = req.files.img
        let imagesPath = path.join(process.cwd(), "uploads", images.name)
        images.mv(imagesPath, (err) => {
            if (err) {
                console.log(err);
            }
        })

        categories.push({
            id: categories.at(-1)?.id + 1 || 1,
            name: body.name,
            img: "http://localhost:9000/files/" + images.name
        });

        writeFile("categories", categories)
        res.send({
            success: true,
            data: categories
        })
    }catch (error){
        res.status(error.status || 409).send({
            success: false,
            data: error.message
        })
    }
};

module.exports = {
    getCategory,
    crateCategory
}