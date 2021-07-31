const path = require('path');

const benchmarkTestFileNames = [
    'data-structures/queue',
];

(async() => {
    console.log('\n\n>>>>>>>>>>>>>>> BENCHMARK TESTS INITIATED <<<<<<<<<<<<<<<<\n')
    for (const benchmarkTestFileName of benchmarkTestFileNames) {
        const benchmarkTestFilePath = path.join(__dirname, `${benchmarkTestFileName}.bench.test.js`);
        try {
            console.log(`>> Running "${path.basename(benchmarkTestFilePath)}" test...`);
            const testRunner = require(benchmarkTestFilePath);
            await testRunner();
        } catch (e) {
            console.log(`>> ERROR at "${benchmarkTestFilePath}"`);
            console.log(`>> ${e.message}`);
            console.log(e);
        }
        console.log('\n\n');
    }
})();
