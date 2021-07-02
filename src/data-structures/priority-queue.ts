import Queue from './queue';
import { priorityPush } from '../utils';

interface PriorityQueueItem {
    value: any;
    priority: number;
};

export default class PriorityQueue {
    private maxCapacity: number | null = null;
    private count: number = 0;
    private storage: { [key: number]: Queue } = {};
    private priorities: number[] = [];

    constructor(maxCapacity: number | null = null) {
        this.maxCapacity = Number.isInteger(maxCapacity) ? maxCapacity : this.maxCapacity;
    }

    print(): void {
        console.log(this.toArray());
    }

    enqueue(priorityQueueItem: PriorityQueueItem): void {
        if (this.hasCap() && this.isFull()) {
            return;
        }

        const { value, priority } = priorityQueueItem;

        if (!this.storage[priority]) {
            this.storage[priority] = new Queue();
            priorityPush(this.priorities, priority);
        }

        this.storage[priority].enqueue(value);

        this.count++;
    }

    dequeue(): any {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const [firstPriority] = this.priorities;
        const queue = this.storage[firstPriority];
        const dequeuedValue = queue.dequeue();

        this.count--;

        if (queue.isEmpty()) {
            delete this.storage[firstPriority];
            this.priorities = this.priorities.slice(1);
        }
        
        return dequeuedValue;
    }

    front(): PriorityQueueItem {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const [firstPriority] = this.priorities;
        const queue = this.storage[firstPriority];
        return { value: queue.front(), priority: firstPriority };
    }

    size(): number {
        return this.count;
    }

    empty(): PriorityQueueItem[] {
        const oldPriorityQueueItems = this.toArray();
        this.count = 0;
        this.storage = {};
        this.priorities = [];
        return oldPriorityQueueItems;
    }

    isEmpty(): boolean {
        return (this.size() === 0);
    }

    isFull(): boolean {
        return this.count === this.maxCapacity;
    }

    private hasCap(): boolean {
        return Number.isInteger(this.maxCapacity);
    }

    toArray(): PriorityQueueItem[] {
        const priorityQueueItems: PriorityQueueItem[] = [];
        for (const priority of this.priorities) {
            const queue = this.storage[priority];
            const queueItems = queue.toArray();
            queueItems.forEach(item => priorityQueueItems.push({ value: item, priority }));
        }
        return priorityQueueItems;
    }

    static fromArray(array: PriorityQueueItem[], maxQueueCapacity: number | null = null): PriorityQueue {
        const priorityQueue = new PriorityQueue(maxQueueCapacity);
        array.forEach(priorityQueueItem => priorityQueue.enqueue(priorityQueueItem));
        return priorityQueue;
    }
}
