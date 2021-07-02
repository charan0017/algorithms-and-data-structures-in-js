<h1 align="center">  
    Algorithms and Data Structures in JavaScript  
</h1>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)

## Installation

```
# with npm
npm i algorithms-and-data-structures-in-js

# with yarn
yarn add algorithms-and-data-structures-in-js

# in Browser (add this is head or body tag)
<script src="https://cdn.jsdelivr.net/npm/algorithms-and-data-structures-in-js@0.4.0/dist/dist.js" crossorigin="anonymous"></script>
#  or add this is head or body tag (for minified version)
<script src="https://cdn.jsdelivr.net/npm/algorithms-and-data-structures-in-js@0.4.0/dist/dist.min.js" crossorigin="anonymous"></script>
```

## Usage

```javascript
// in Node.js
const algorithmsAndDataStructuresInJs = require("algorithms-and-data-structures-in-js");

// in Browser
algorithmsAndDataStructuresInJs; // it is directly available

// Example Usage - Stack
const { Stack } = algorithmsAndDataStructuresInJs;

const fruitsStack = new Stack();
fruitsStack.push("Apples");
fruitsStack.push("Bananas");

const mixedStack = new Stack();
mixedStack.push(1);
mixedStack.push("Game of Thrones");
mixedStack.push({ name: "Tom" });
```

## Documentation

| Algorithms | Data Structures                                                                    |
| ---------- | ---------------------------------------------------------------------------------- |
|            | -[**Stack**](#stack), -[**Queue**](#queue), -[**Priority Queue**](#priority-queue) |

## Stack

**Instance Methods** - **push**, **pop**, **peek**, **size**, **toArray**, **empty**, **isEmpty**, **reverse**

**Static Methods** - **fromArray** (it will return new Stack instance)

### Usage:

```javascript
// Importing in Node.js
const { Stack } = require("algorithms-and-data-structures-in-js");

// Importing in Browser
const { Stack } = algorithmsAndDataStructuresInJS;

const stack = new Stack();
stack.push("Apples");
stack.push("Mangoes");
stack.push("Bananas");
stack.pop(); // it will return 'Bananas'
stack.peek(); // it will return 'Mangoes'
stack.size(); // it will return 2
stack.toArray(); // it will return ["Apples", "Mangoes"];
stack.empty(); // it will empty the stack
stack.isEmpty(); // it will return true

const stackItems = ["Physics", "Math"];
const anotherStack = Stack.fromArray(stackItems);
anotherStack.peek(); // it will return 'Math'
anotherStack.toArray(); // it will return ["Physics", "Math"];
anotherStack.reverse(); // it will reverse the stack and also returns it ["Math", "Physics"]
anotherStack.peek(); // it will return 'Physics'
```

Note: `stack.empty()` will empty the stack, however it will also return `stack.toArray()` of previous stack

## Queue

**Instance Methods** - **enqueue**, **dequeue**, **front**, **print**, **size**, **toArray**, **empty**, **isEmpty**, **isFull**, **reverse**

**Static Methods** - **fromArray** (it will return new Queue instance)

### Usage:

```javascript
// Importing in Node.js
const { Queue } = require("algorithms-and-data-structures-in-js");

// Importing in Browser
const { Queue } = algorithmsAndDataStructuresInJS;

const queue = new Queue();
queue.enqueue("Apples");
queue.enqueue("Mangoes");
queue.enqueue("Bananas");
queue.dequeue(); // it will return 'Apples'
queue.size(); // it will return 2
queue.front(); // it will return 'Mangoes'
queue.print(); // it will log queue-items to console ["Mangoes", "Bananas"]
queue.toArray(); // it will return ["Mangoes", "Bananas"];
queue.empty(); // it will empty the queue
queue.isEmpty(); // it will return true

const queueItems = ["Physics", "Math", "Chemistry"];
const maxQueueSize = 2;
const smallQueue = Queue.fromArray(queueItems, maxQueueSize);
smallQueue.front(); // it will return 'Physics'
smallQueue.isFull(); // it will return true
smallQueue.toArray(); // it will return ["Physics", "Math"];
smallQueue.reverse(); // it will reverse the queue and also returns it ["Math", "Physics"]
smallQueue.front(); // it will return 'Math'
```

Note: `queue.empty()` will empty the queue, however it will also return `queue.toArray()` of previous queue

## Priority Queue

**Instance Methods** - **enqueue**, **dequeue**, **front**, **print**, **size**, **toArray**, **empty**, **isEmpty**, **isFull**

**Static Methods** - **fromArray** (it will return new Queue instance)

### Usage:

```javascript
// Importing in Node.js
const { PriorityQueue } = require("algorithms-and-data-structures-in-js");

// Importing in Browser
const { PriorityQueue } = algorithmsAndDataStructuresInJS;

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ value: "Apples", priority: 3 });
priorityQueue.enqueue({ value: "Mangoes", priority: 1 });
priorityQueue.enqueue({ value: "Bananas", priority: 9 });
priorityQueue.dequeue(); // it will return 'Mangoes'
priorityQueue.size(); // it will return 2
priorityQueue.front(); // it will return 'Apples'
priorityQueue.print(); // it will log priority-queue-items to console [{ value: "Apples", priority: 3 }, { value: "Bananas", priority: 9 }]
priorityQueue.toArray(); // it will return [{ value: "Apples", priority: 3 }, { value: "Bananas", priority: 9 }];
priorityQueue.empty(); // it will empty the priorityQueue
priorityQueue.isEmpty(); // it will return true

const priorityQueueItems = [
  { value: "Physics", priority: 0.9 },
  { value: "Math", priority: 0.1 },
  { value: "Chemistry", priority: 0.5 },
];
const maxQueueSize = 2;
const smallPriorityQueue = Queue.PriorityQueue(
  priorityQueueItems,
  maxQueueSize
);
smallPriorityQueue.front(); // it will return 'Math'
smallPriorityQueue.isFull(); // it will return true
smallPriorityQueue.toArray(); // it will return [{ value: "Math", priority: 0.1 }, { value: "Physics", priority: 0.9 }];
```

Note: `priorityQueue.empty()` will empty the priorityQueue, however it will also return `priorityQueue.toArray()` of previous priorityQueue
