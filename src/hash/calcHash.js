import { createHash } from 'crypto';
import { readFile } from "fs/promises";
import fs from "fs";

const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt';
    const existFile = fs.existsSync(path);

    if(!existFile) {
        return console.log('ERROR');
    }

    const fileBuffer = await readFile(path);

     const hash = createHash('sha256').update(fileBuffer).digest('hex');
     console.log(hash);
};

await calculateHash();
