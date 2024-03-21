require('dotenv').config()
const Replicate = require("replicate")
const express = require("express")
const path = require("path")

const app = express()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT ?? 4000


app.get('/', (req, res)=>{
  res.render("home.ejs", {title:"Home Page", message:
"DEEPFAKE TEXT TO SPEECH APP"})
})


async function output(){
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    })
    const output = await replicate.run(
        "zsxkib/realistic-voice-cloning:0a9c7c558af4c0f20667c1bd1260ce32a2879944a0b9e44e1398660c077b1550",
        {
          input: {
            protect: 0.33,
            rvc_model: "Squidward",
            index_rate: 0.5,
            song_input: "https://replicate.delivery/pbxt/JsPIizFfRy54Jk5LuXdnrNdV1JHJ6oLmPPdRuIfh3lvpoNai/gangnam.mp3",
            reverb_size: 0.15,
            pitch_change: "no-change",
            rms_mix_rate: 0.25,
            filter_radius: 3,
            output_format: "mp3",
            reverb_damping: 0.7,
            reverb_dryness: 0.8,
            reverb_wetness: 0.2,
            crepe_hop_length: 128,
            pitch_change_all: 0,
            main_vocals_volume_change: 10,
            pitch_detection_algorithm: "rmvpe",
            instrumental_volume_change: 0,
            backup_vocals_volume_change: 0
          }
        }
      );
      console.log(output);
};


app.get('/check', async(req, res)=>{
  try{
    const OutputAudio = await output()
    res.send('response.ejs', OutputAudio)
  }
  catch (error){
    console.log(error);
    res.send("Internal Server Error")
  }
 return;
})



app.listen(PORT, (err)=>{
  if (err){
    console.log("App not work")
    return;
  }
  console.log(`App listen at PORT: https://localhost:${PORT}`);
})



