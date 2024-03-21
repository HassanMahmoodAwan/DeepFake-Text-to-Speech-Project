const { readFileSync } = require("fs");
const Replicate = require("replicate")
require('dotenv').config()
const {readFile} = require("fs").promises;
const fs = require("fs")
// const image = readFile("./public/audios/HassanAudio.mp3")
// console.log(image);
// const image =  readFile("./public/audios/HassanAudio.mp3").toString();

const path = "./public/audios/HassanAudio.mp3";
fs.stat(path, (err, stats)=>{
  if(err){
    console.log("Not Readed");
    return;
  }
  else{
    const fileSize = stats.size;

    console.log((fileSize/1024).toFixed(2));
  }
})

fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
      console.error("File does not exist or cannot be accessed.");
  } else {
      console.log("File exists.");
  }
});


async function main(){
  
  const image = await readFile("./public/audios/HassanAudio.mp3")

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
        // song_input: "https://replicate.delivery/pbxt/JsPIizFfRy54Jk5LuXdnrNdV1JHJ6oLmPPdRuIfh3lvpoNai/gangnam.mp3",
        song_input: image,
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

// main()





