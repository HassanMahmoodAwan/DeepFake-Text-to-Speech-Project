const Replicate = require("replicate")
// import { readFile } from "node:fs/promises";
const { readFile } = require("fs").promises;

// REPLICATE_API_TOKEN="r8_06l6hwas5tCLkIEaTteQsVhantyhuU90rYoZo"  // Prof
REPLICATE_API_TOKEN="r8_8RntfbSfbVynvHdwJFK0Q2ap5jhN5ww2p05rf"    // Test

const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
});






;(async()=>{
    // const data = (await readFile("./dataset_Wajahat_Qazi.zip")).toString("base64");
    // const image = `data:application/octet-stream;base64,${data}`;

    // const dataset_zip = await readFile("./dataset_Wajahat_Qazi.zip")
    const dataset_zip = "https://replicate.delivery/pbxt/ufX0SFch8G3NAaAeVZPXpkU3hfSDK9JR2GDtc0OLvE0JgedKB/dataset_wajahat_qazi.zip"

    
const input = {
    epoch: 80,
    version: "v2",
    f0method: "rmvpe_gpu",
    batch_size: "7",
    dataset_zip: dataset_zip,
    sample_rate: "48k"
};

const output = await replicate.run("replicate/train-rvc-model:0397d5e28c9b54665e1e5d29d5cf4f722a7b89ec20e9dbf31487235305b1a101", { input });
console.log(output)

})();


