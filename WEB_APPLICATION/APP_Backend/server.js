const express = require('express')
const fileUpload = require("express-fileupload")
const bodyParser = require('body-parser');

const path = require("path")
const Replicate = require('replicate');
const { readFile } = require('fs').promises;

const voiceCloning= require("./routes/voiceCloning")

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(fileUpload())
app.use(bodyParser.text())
app.use(express.json())
app.use('/file', voiceCloning)

app.use('/audio', express.static(path.join(__dirname, 'public/audio')))








app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
})