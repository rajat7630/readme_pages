const express = require("express");
const dirTree = require("directory-tree");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/fileStructure", (req, res) => {
    const tree = dirTree("C:/Users/HP/Desktop/fiverr/FIle Structure/pages/src");
    res.json(tree);
})

app.post("/file", (req, res) => {
    console.log(req.body.file);
    fs.readFile(req.body.file, 'utf8' ,(err, data) => {
        console.log(data);
        res.send(data);
    })
})






const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("started");
})