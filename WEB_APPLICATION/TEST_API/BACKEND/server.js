const express = require('express')
const fileUpload = require("express-fileupload")
const path = require("path")
const Replicate = require('replicate');
const { readFile } = require('fs').promises;

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(fileUpload())
app.use('/audio', express.static(path.join(__dirname, 'public/audio')))



// const REPLICATE_API_TOKEN="r8_06l6hwas5tCLkIEaTteQsVhantyhuU90rYoZo"
const REPLICATE_API_TOKEN="r8_8RntfbSfbVynvHdwJFK0Q2ap5jhN5ww2p05rf"
const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
});


let uploadedFile ;

app.get("/file/upload", async(req, res)=>{
  if (uploadedFile){
    try {
      const data = (await readFile(`./public/audio/${uploadedFile.name}`)).toString('base64'); // Await the result of readFile
      const image = `data:application/octet-stream;base64,${data}`;
      
      
      
      const input = {
          rvc_model: "Trump",
          song_input: image,
          main_vocals_volume_change: 10
      };
      const output = await replicate.run("zsxkib/realistic-voice-cloning:0a9c7c558af4c0f20667c1bd1260ce32a2879944a0b9e44e1398660c077b1550", { input }); // Await the result of replicate.run
      console.log(output);
      
      res.send(output)
      uploadedFile = undefined
      return;

    } catch (error) {
      console.error(error)
      return;
   }

  }
  
  
   
})

app.post("/file/upload", async(req, res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: 'No files were uploaded.' })
      }

      uploadedFile = req.files.file;
      const uploadPath = path.join(__dirname, 'public/audio', uploadedFile.name);
    
      // Save the file to the public directory
      await uploadedFile.mv(uploadPath, (err) => {5
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error uploading file.' });
        }
        res.json({ message: 'File uploaded successfully.' });
      });

    


})


app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
})