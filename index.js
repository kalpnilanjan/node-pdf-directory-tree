const fs = require('fs');
const dirTree = require("directory-tree");
const filteredTree = dirTree(__dirname, { extensions: /\.pdf/});

const cors = require('cors');

const express = require('express')
const app = express()
const port = 3000
app.use(cors());

app.get('/pdf', async function(req,res){
    let filePath= req.query.pdfLink;
    console.log(filePath);
    fs.readFile(__dirname + "\\" + filePath , function (err,data){
        console.log(__dirname + "\\" + filePath);
        res.contentType("application/pdf");
        res.send(data);
        });
});
app.get('/files', (req, res) => res.send(filteredTree))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))