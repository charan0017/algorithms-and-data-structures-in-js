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
<script src="https://cdn.jsdelivr.net/npm/algorithms-and-data-structures-in-js@0.1.0/dist/dist.js" crossorigin="anonymous"></script>
#  or add this is head or body tag (for minified version)
<script src="https://cdn.jsdelivr.net/npm/algorithms-and-data-structures-in-js@0.1.0/dist/dist.min.js" crossorigin="anonymous"></script>
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

- [Stack](#stack)

## Stack

**Methods** - **push**, **pop**, **peek**, **size**, **toArray**, **fromArray**, **empty**, **isEmpty**

### Usage:

```javascript
// Importing in Node.js
const { Stack } = require("algorithms-and-data-structures-in-js");

// Importing in Browser
const { Stack } = algorithmsAndDataStructuresInJS;

const stack = new Stack();
stack.push("Apples");
stack.push("Mangoes");
stack.pop(); // it will return 'Mangoes'
stack.peek(); // it will return 'Apples'
stack.size(); // it will return 1
stack.toArray(); // it will return ["Apples"];
stack.empty(); // it will empty the stack
stack.isEmpty(); // it will return true

const anotherStack = Stack.fromArray(["Physics", "Math"]);
anotherStack.peek(); // it will return 'Math'
```

Note: `stack.empty()` will empty the stack, however it will also return `stack.toArray()` of previous stack
