const { assert, expect } = require('chai');
const { Queue } = require('../../main');

describe('Queue Test', () => {
    const movies = ['Titanic', 'Avatar'];
    const books = ['Harry Potter', 'Game of Thrones'];
    const instances = [{ name: 'Tom' }, { name: 'Jerry' }];

    it('queue .enqueue(), .front(), .dequeue(), .size()', () => {
        const queue = new Queue();
        expect(() => queue.enqueue(movies[0])).to.not.throw();
        assert.deepEqual(queue.front(), movies[0], `Expected to be equal to ${movies[0]}`);
        assert.deepEqual(queue.dequeue(), movies[0], `Expected to be equal to ${movies[0]}`);
        assert.equal(queue.size(), 0, 'Expected to get 0 as Queue Size');
    });

    it('queue.reverse()', () => {
        const queue = new Queue();
        movies.forEach(movie => queue.enqueue(movie));
        expect(() => queue.reverse()).to.not.throw();
        assert.deepEqual(queue.toArray(), movies.slice().reverse(), `Expected to receive Items of ${movies.slice().reverse()}`);
    });

    it('queue .empty(), .isEmpty()', () => {
        const queue = new Queue();
        movies.forEach(movie => queue.enqueue(movie));
        assert.deepEqual(queue.empty(), movies, `Expected to receive Items of ${movies}`);
        assert.equal(queue.isEmpty(), true, 'Expected to get true as Empty Queue');
    });

    it('queue .toArray(), .isFull()', () => {
        const queue = new Queue(1);
        movies.forEach(movie => queue.enqueue(movie));
        assert.equal(queue.size(), 1, 'Expected to have only 1 Item in the Queue');
        assert.equal(queue.isFull(), true, 'Expected to get true as Full Queue');
        assert.deepEqual(queue.toArray(), [movies[0]], `Expected to receive Items of ${[movies[0]]}`);
    });

    it('Queue.fromArray()', () => {
        const queue = Queue.fromArray(movies);
        const otherQueue = new Queue();
        assert.equal(queue.constructor.name, otherQueue.constructor.name, `Expected to be equal to ${otherQueue.constructor.name}`);
        assert.deepEqual(queue.toArray(), movies, `Expected to receive Items of ${movies}`);
        expect(() => Queue.fromArray({})).to.throw();
    });

    it('mixed-queue test', () => {
        const queue = new Queue();
        const queueItems = [];
        movies.forEach((movie, i) => {
            queue.enqueue(movie);
            queueItems.push(movie);
            if (books[i]) {
                queue.enqueue(books[i]);
                queueItems.push(books[i]);
            }
            if (instances[i]) {
                queue.enqueue(instances[i]);
                queueItems.push(instances[i]);
            }
        });
        assert.equal(queue.size(), queueItems.length, 'Expected to have all items in the Stack');
        assert.deepEqual(queue.toArray(), queueItems, `Expected to be equal to ${queueItems}`);
    });
});
