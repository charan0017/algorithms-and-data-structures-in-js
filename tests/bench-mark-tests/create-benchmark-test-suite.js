const Benchmark = require('benchmark');

module.exports = function createBenchmarkTestSuite(tests = {}, isAsync = false) {
    return function benchmarkTestSuite() {
        const suite = new Benchmark.Suite;

        // add tests
        Object.keys(tests).forEach(testName => suite.add(`"${testName}"`, tests[testName]));

        // add listeners
        suite.on('cycle', function(event) {
            console.log(`       >> ${String(event.target)}`);
        })
        .on('complete', function() {
            console.log(`   >> Fastest is ${this.filter('fastest').map('name')}`);
        })
        // run async
        .run({ 'async': isAsync });
    }
}