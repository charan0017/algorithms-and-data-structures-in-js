const { assert, expect } = require('chai');
const { PriorityQueue } = require('../../../main');

describe('PriorityQueue Test', () => {
    const movies = [{value: 'Titanic', priority: 3}, {value: 'Avatar', priority: 1}];
    const books = [{value: 'Harry Potter', priority: 2}, {value: 'Game of Thrones', priority: 5}];
    const instances = [{value: { name: 'Tom' }, priority: 0.1}, {value: { name: 'Jerry' }, priority: 0.3}];

    it('priorityQueue .enqueue(), .front(), .dequeue(), .size()', () => {
        const priorityQueue = new PriorityQueue();
        expect(() => priorityQueue.enqueue(movies[0])).to.not.throw();
        assert.deepEqual(priorityQueue.front(), movies[0], `Expected to be equal to ${movies[0]}`);
        assert.deepEqual(priorityQueue.dequeue(), movies[0].value, `Expected to be equal to ${movies[0].value}`);
        assert.equal(priorityQueue.size(), 0, 'Expected to get 0 as PriorityQueue Size');
    });

    it('priorityQueue .empty(), .isEmpty()', () => {
        const priorityQueue = new PriorityQueue();
        movies.forEach(movie => priorityQueue.enqueue(movie));
        const sortedMovies = movies.sort((a, b) => a.priority - b.priority);
        assert.deepEqual(priorityQueue.empty(), sortedMovies, `Expected to receive Items of ${sortedMovies}`);
        assert.equal(priorityQueue.isEmpty(), true, 'Expected to get true as Empty PriorityQueue');
    });

    it('priorityQueue .toArray(), .isFull()', () => {
        const priorityQueue = new PriorityQueue(1);
        movies.forEach(movie => priorityQueue.enqueue(movie));
        assert.equal(priorityQueue.size(), 1, 'Expected to have only 1 Item in the PriorityQueue');
        assert.equal(priorityQueue.isFull(), true, 'Expected to get true as Full PriorityQueue');
        assert.deepEqual(priorityQueue.toArray(), [movies[0]], `Expected to receive Items of ${[movies[0]]}`);
    });

    it('PriorityQueue.fromArray()', () => {
        const priorityQueue = PriorityQueue.fromArray(movies);
        const otherPriorityQueue = new PriorityQueue();
        assert.equal(priorityQueue.constructor.name, otherPriorityQueue.constructor.name, `Expected to be equal to ${otherPriorityQueue.constructor.name}`);
        const sortedMovies = movies.sort((a, b) => a.priority - b.priority);
        assert.deepEqual(priorityQueue.toArray(), sortedMovies, `Expected to receive Items of ${sortedMovies}`);
        expect(() => PriorityQueue.fromArray({})).to.throw();
    });

    it('mixed-priorityQueue test', () => {
        const priorityQueue = new PriorityQueue();
        const priorityQueueItems = [];
        movies.forEach((movie, i) => {
            priorityQueue.enqueue(movie);
            priorityQueueItems.push(movie);
            if (books[i]) {
                priorityQueue.enqueue(books[i]);
                priorityQueueItems.push(books[i]);
            }
            if (instances[i]) {
                priorityQueue.enqueue(instances[i]);
                priorityQueueItems.push(instances[i]);
            }
        });
        assert.equal(priorityQueue.size(), priorityQueueItems.length, 'Expected to have all items in the Stack');
        const sortedPriorityQueueItems = priorityQueueItems.sort((a, b) => a.priority - b.priority);
        assert.deepEqual(priorityQueue.toArray(), sortedPriorityQueueItems, `Expected to be equal to ${sortedPriorityQueueItems}`);
    });
});
