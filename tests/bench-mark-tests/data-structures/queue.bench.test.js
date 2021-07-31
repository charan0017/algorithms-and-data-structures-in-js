const createBenchmarkTestSuite = require('../create-benchmark-test-suite');;
const { Queue } = require('../../../main');

module.exports = createBenchmarkTestSuite({
    'ArrayQueue Test': function() {
        const arrayQueue = new ArrayQueue();
        const iteration = 100000;
        for (let i = 0; i < iteration; i++) {
            arrayQueue.enqueue(i);
        }
        for (let i = 0; i < iteration; i++) {
            arrayQueue.dequeue();
        }
    },
    'Queue Test': function() {
        const queue = new Queue();
        const iteration = 100000;
        for (let i = 0; i < iteration; i++) {
            queue.enqueue(i);
        }
        for (let i = 0; i < iteration; i++) {
            queue.dequeue();
        }
    }
}, false);

function ArrayQueue() { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift(); 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}
