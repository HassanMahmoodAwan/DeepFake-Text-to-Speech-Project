const Replicate = require("replicate")
// import { readFile } from "node:fs/promises";
const { readFile } = require("fs").promises;

// REPLICATE_API_TOKEN="r8_06l6hwas5tCLkIEaTteQsVhantyhuU90rYoZo"  // Prof
REPLICATE_API_TOKEN="r8_8RntfbSfbVynvHdwJFK0Q2ap5jhN5ww2p05rf"    // Test

const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
});

const input = {
    audio_name: "wajahat_qazi",
    youtube_url: "https://youtu.be/Ae5ES4tVBII?si=JCI6xooC4w7lgtWQ"
};

;(async()=>{
    const output = await replicate.run("zsxkib/create-rvc-dataset:c445e27ff34574e92781c15c67db41835cedcdc27a19f527a7dcf37bd0ffe1ff", { input });
    
    console.log(output)
})();

