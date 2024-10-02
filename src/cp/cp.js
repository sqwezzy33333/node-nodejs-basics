import child_process from 'child_process';

const SCRIPT_FILENAME = './src/cp/files/script.js';

const dataArray = [];


const spawnChildProcess = async (args) => {
    child_process.fork(SCRIPT_FILENAME, args);
};

spawnChildProcess(['test', 'test2', 'tesr3'])

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
