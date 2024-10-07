import { createReadStream } from 'fs';

export const read = async () => {

    const fileToRead = "./src/streams/files/fileToRead.txt";
    const readStream = createReadStream(fileToRead, 'utf8');

    readStream.on('data', (content) => {
            process.stdout.write(content + '\n');
        });
};

await read();
