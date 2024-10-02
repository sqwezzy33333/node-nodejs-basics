import fs from 'fs';

const ERROR = 'FS operation failed';
const READ_PATH = './src/fs/files/fileToRead.txt';

const read = async () => {
    const checkExist = fs.existsSync(READ_PATH);

    if (!checkExist) {
        return console.log(ERROR);
    }

    await fs.readFile(READ_PATH, 'utf-8',(e, file) => {
        if (e) {
            return console.log(e);
        }
        console.log(file);
    })
};

read();
