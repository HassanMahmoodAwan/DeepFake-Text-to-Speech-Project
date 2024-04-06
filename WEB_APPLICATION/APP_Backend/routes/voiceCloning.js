const express = require('express')
const app = express.Router()
const fileUpload = require("express-fileupload")
const bodyParser = require('body-parser');

const path = require("path")
const Replicate = require('replicate');
const { readFile } = require('fs').promises;



const REPLICATE_API_TOKEN="r8_06l6hwas5tCLkIEaTteQsVhantyhuU90rYoZo"
// const REPLICATE_API_TOKEN="r8_8RntfbSfbVynvHdwJFK0Q2ap5jhN5ww2p05rf"
const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
});


let uploadedFile ;
let option;

app.route("/upload").get( async(req, res)=>{
  if (uploadedFile && option){
    try {

      const data = (await readFile(`./public/audio/${uploadedFile.name}`)).toString('base64'); // Await the result of readFile
      const image = `data:application/octet-stream;base64,${data}`;
      
      let input;
      if (option == "Wajahat"){
        input = {
          rvc_model: "CUSTOM",
          custom_rvc_model_download_url: "https://replicate.delivery/pbxt/eDqhKrXNU7UxESSEve5MJTtyFr2wFeReNUfKY1mSycmqP87UC/wajahat_qazi.zip",
          song_input: image,
          main_vocals_volume_change: 10
      };
      }else {
        input = {
          rvc_model: option,
          song_input: image,
          main_vocals_volume_change: 10
      };
      }

      
      console.log("Input Provided, Wait Now")

      const output = await replicate.run("zsxkib/realistic-voice-cloning:0a9c7c558af4c0f20667c1bd1260ce32a2879944a0b9e44e1398660c077b1550", { input }); // Await the result of replicate.run

      console.log("Output Generated: ");
      console.log(output);
      
      res.send(output)
      uploadedFile = undefined
      option = undefined
      return;

    } catch (error) {
      console.error(error)
      return;
   }

  } 
})

app.route("/upload").post( async(req, res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: 'No files were uploaded.' })
      }

      uploadedFile = req.files.file;
      const uploadPath = path.join(__dirname, '../public/audio', uploadedFile.name);
    
      // Save the file to the public directory
      await uploadedFile.mv(uploadPath, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error uploading file.' });
        }
        res.json({ message: 'File uploaded successfully.' });
      });

})

app.route('/option').post((req, res) => {
  option = req.body; 
  console.log(option)
 
  res.send('Option received by backend');
});




module.exports = app