const { assert, expect } = require('chai');
const { Stack } = require('../../../main');

describe('Stack Test', () => {
    const movies = ['Titanic', 'Avatar'];
    const books = ['Harry Potter', 'Game of Thrones'];
    const instances = [{ name: 'Tom' }, { name: 'Jerry' }];

    it('stack .push(), .peek(), .pop(), .size()', () => {
        const stack = new Stack();
        expect(() => stack.push(movies[0])).to.not.throw();
        assert.deepEqual(stack.peek(), movies[0], `Expected to be equal to ${movies[0]}`);
        assert.deepEqual(stack.pop(), movies[0], `Expected to be equal to ${movies[0]}`);
        assert.equal(stack.size(), 0, 'Expected to get 0 as Stack Size');
    });

    it('stack.reverse()', () => {
        const stack = new Stack();
        movies.forEach(movie => stack.push(movie));
        assert.deepEqual(stack.reverse(), movies.slice().reverse(), `Expected to receive Items of ${movies.slice().reverse()}`);
    });

    it('stack .empty(), .isEmpty()', () => {
        const stack = new Stack();
        stack.push(movies[0]);
        assert.deepEqual(stack.empty(), [movies[0]], `Expected to receive only 1 Item of ${[movies[0]]}`);
        assert.equal(stack.isEmpty(), true, 'Expected to get true as Empty Stack');
    });

    it('stack.toArray()', () => {
        const stack = new Stack();
        movies.forEach(movie => stack.push(movie));
        assert.deepEqual(stack.toArray(), movies, `Expected to receive Items of ${movies}`);
    });

    it('Stack.fromArray()', () => {
        const stack = Stack.fromArray(movies);
        const otherStack = new Stack();
        assert.equal(stack.constructor.name, otherStack.constructor.name, `Expected to be equal to ${otherStack.constructor.name}`);
        assert.deepEqual(stack.toArray(), movies, `Expected to receive Items of ${movies}`);
        expect(() => Stack.fromArray({})).to.throw();
    });

    it('mixed-stack test', () => {
        const stack = new Stack();
        const stackItems = [];
        movies.forEach((movie, i) => {
            stack.push(movie);
            stackItems.push(movie);
            if (books[i]) {
                stack.push(books[i]);
                stackItems.push(books[i]);
            }
            if (instances[i]) {
                stack.push(instances[i]);
                stackItems.push(instances[i]);
            }
        });
        assert.equal(stack.size(), stackItems.length, 'Expected to have all items in the Stack');
        assert.deepEqual(stack.toArray(), stackItems, `Expected to be equal to ${stackItems}`);
    });
});
