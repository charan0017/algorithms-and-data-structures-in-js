/*!
  * Algorithms & Data Structures in JavaScript  v0.2.1 (https://github.com/charan0017/algorithms-and-data-structures-in-js#readme)
  * Copyright 2011-2021 Sai Charan
  * Licensed under MIT (https://github.com/charan0017/algorithms-and-data-structures-in-js/blob/main/LICENSE)
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.algorithmsAndDataStructuresInJS = {}));
}(this, (function (exports) { 'use strict';

    var Stack =
    /** @class */
    function () {
      function Stack() {
        this.count = 0;
        this.storage = {};
      }

      Stack.prototype.push = function (item) {
        this.storage[this.count] = item;
        this.count++;
      };

      Stack.prototype.pop = function () {
        if (this.count < 1) {
          return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      };

      Stack.prototype.peek = function () {
        return this.storage[this.count - 1];
      };

      Stack.prototype.size = function () {
        return this.count;
      };

      Stack.prototype.reverse = function () {
        var _this = this;

        var stackItems = this.empty();
        stackItems.reverse().forEach(function (item) {
          return _this.push(item);
        });
        return stackItems;
      };

      Stack.prototype.empty = function () {
        var oldStackItems = this.toArray();
        this.count = 0;
        this.storage = {};
        return oldStackItems;
      };

      Stack.prototype.isEmpty = function () {
        return this.size() === 0;
      };

      Stack.prototype.toArray = function () {
        var oldStackItems = [];

        for (var i = 0; i < this.size(); i++) {
          oldStackItems[i] = this.storage[i];
        }

        return oldStackItems;
      };

      Stack.fromArray = function (array) {
        var stack = new Stack();
        array.forEach(function (item) {
          return stack.push(item);
        });
        return stack;
      };

      return Stack;
    }();

    var QueueItem =
    /** @class */
    function () {
      function QueueItem(value) {
        this._value = null;
        this.nextQueueItem = null;
        this._value = value;
      }

      QueueItem.prototype.value = function () {
        return this._value;
      };

      QueueItem.prototype.setNextQueueItem = function (queueItem) {
        if (this.hasNextQueueItem()) {
          return;
        }

        this.nextQueueItem = queueItem;
      };

      QueueItem.prototype.getNextQueueItem = function () {
        return this.nextQueueItem;
      };

      QueueItem.prototype.hasNextQueueItem = function () {
        return this.getNextQueueItem() !== null;
      };

      return QueueItem;
    }();

    var Queue =
    /** @class */
    function () {
      function Queue(maxCapacity) {
        if (maxCapacity === void 0) {
          maxCapacity = null;
        }

        this.maxCapacity = null;
        this.count = 0;
        this.firstQueueItem = null;
        this.lastQueueItem = null;
        this.maxCapacity = Number.isInteger(maxCapacity) ? maxCapacity : this.maxCapacity;
      }

      Queue.prototype.print = function () {
        console.log(this.toArray());
      };

      Queue.prototype.enqueue = function (value) {
        if (this.hasCap() && this.isFull()) {
          return;
        }

        var queueItem = new QueueItem(value);

        if (!this.firstQueueItem) {
          this.firstQueueItem = queueItem;
        }

        if (this.lastQueueItem) {
          this.lastQueueItem.setNextQueueItem(queueItem);
        }

        this.lastQueueItem = queueItem;
        this.count++;
      };

      Queue.prototype.dequeue = function () {
        if (this.isEmpty() || !this.firstQueueItem) {
          return undefined;
        }

        var dequeuedValue = this.front();
        this.firstQueueItem = this.firstQueueItem.getNextQueueItem();
        this.count--;
        return dequeuedValue;
      };

      Queue.prototype.front = function () {
        if (this.isEmpty() || !this.firstQueueItem) {
          return undefined;
        }

        return this.firstQueueItem.value();
      };

      Queue.prototype.size = function () {
        return this.count;
      };

      Queue.prototype.reverse = function () {
        var _this = this;

        var queueItems = this.empty();
        queueItems.reverse().forEach(function (item) {
          return _this.enqueue(item);
        });
        return queueItems;
      };

      Queue.prototype.empty = function () {
        var oldQueueItems = this.toArray();
        this.count = 0;
        this.firstQueueItem = null;
        this.lastQueueItem = null;
        return oldQueueItems;
      };

      Queue.prototype.isEmpty = function () {
        return this.size() === 0;
      };

      Queue.prototype.isFull = function () {
        return this.count === this.maxCapacity;
      };

      Queue.prototype.hasCap = function () {
        return Number.isInteger(this.maxCapacity);
      };

      Queue.prototype.toArray = function () {
        var queueItems = [];
        var queueItem = this.firstQueueItem;

        while (queueItem) {
          queueItems.push(queueItem.value());
          queueItem = queueItem.getNextQueueItem();
        }

        return queueItems;
      };

      Queue.fromArray = function (array, maxQueueCapacity) {
        if (maxQueueCapacity === void 0) {
          maxQueueCapacity = null;
        }

        var queue = new Queue(maxQueueCapacity);
        array.forEach(function (item) {
          return queue.enqueue(item);
        });
        return queue;
      };

      return Queue;
    }();

    exports.Queue = Queue;
    exports.Stack = Stack;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dist.bundle.js.map
