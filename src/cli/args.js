const parseArgs = () => {
    const filteredArguments = process.argv.slice(2);

    filteredArguments.forEach((arg, i) => {
        if (i % 2 !== 0) {
            return;
        }
        const next = filteredArguments[i + 1];
        console.log(arg.substring(2) + ' is ' + (next || '') + ',')
    })
};

parseArgs();
