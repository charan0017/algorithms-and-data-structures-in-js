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
<script src="https://cdn.jsdelivr.net/npm/algorithms-and-data-structures-in-js@0.3.0/dist/dist.js" crossorigin="anonymous"></script>
#  or add this is head or body tag (for minified version)
<script src="https://cdn.jsdelivr.net/npm/algorithms-and-data-structures-in-js@0.3.0/dist/dist.min.js" crossorigin="anonymous"></script>
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

| Algorithms | Data Structures                          |
| ---------- | ---------------------------------------- |
|            | [**Stack**](#stack), [**Queue**](#queue) |

## Stack

**Methods** - **push**, **pop**, **peek**, **size**, **toArray**, **fromArray**, **empty**, **isEmpty**, **reverse**

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

**Methods** - **enqueue**, **dequeue**, **front**, **size**, **toArray**, **fromArray**, **empty**, **isEmpty**, **isFull**, **reverse**

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
queue.front(); // it will return 'Mangoes'
queue.size(); // it will return 2
queue.toArray(); // it will return ["Mangoes", "Bananas"];
queue.empty(); // it will empty the stack
queue.isEmpty(); // it will return true

const queueItems = ["Physics", "Math", "Chemistry"];
const maxQueueSize = 2;
const smallQueue = Queue.fromArray(queueItems, maxQueueSize);
smallQueue.front(); // it will return 'Physics'
smallQueue.isFull(); // it will return true
smallQueue.toArray(); // it will return ["Physics", "Math"];
smallQueue.reverse(); // it will reverse the stack and also returns it ["Math", "Physics"]
smallQueue.front(); // it will return 'Math'
```

Note: `queue.empty()` will empty the queue, however it will also return `queue.toArray()` of previous queue
