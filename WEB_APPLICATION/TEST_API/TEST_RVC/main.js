const Replicate = require('replicate');
const { readFile } = require('fs').promises;

const REPLICATE_API_TOKEN="r8_TB7manBWvqgknt5N2woW6ArfS1T4RDV4Z09W7"
const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
});

async function main() {
    try {
        const data = (await readFile("./sampleAudio.mp3")).toString('base64'); // Await the result of readFile
        const image = `data:application/octet-stream;base64,${data}`;

        const input = {
            rvc_model: "Trump",
            song_input: image,
            main_vocals_volume_change: 10
        };
        const output = await replicate.run("zsxkib/realistic-voice-cloning:0a9c7c558af4c0f20667c1bd1260ce32a2879944a0b9e44e1398660c077b1550", { input }); // Await the result of replicate.run
        console.log(output);
    } catch (error) {
        console.error(error);
    }
}

main();
