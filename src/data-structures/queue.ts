interface QueueItem {
    value: any;
    nextQueueItem: QueueItem | null;
};

export default class Queue {
    private maxCapacity: number | null = null;
    private count: number = 0;
    private firstQueueItem: QueueItem | null = null;
    private lastQueueItem: QueueItem | null = null;

    constructor(maxCapacity: number | null = null) {
        this.maxCapacity = Number.isInteger(maxCapacity) ? maxCapacity : this.maxCapacity;
    }

    print(): void {
        console.log(this.toArray());
    }

    enqueue(value: any): void {
        if (this.hasCap() && this.isFull()) {
            return;
        }

        const queueItem: QueueItem = { value, nextQueueItem: null };

        if (!this.firstQueueItem) {
            this.firstQueueItem = queueItem;
        }
        
        if (this.lastQueueItem && !this.lastQueueItem.nextQueueItem) {
            this.lastQueueItem.nextQueueItem = queueItem;
        }

        this.lastQueueItem = queueItem;

        this.count++;
    }

    dequeue(): any {
        if (this.isEmpty() || !this.firstQueueItem) {
            return undefined;
        }
        const dequeuedValue = this.front();
        this.firstQueueItem = this.firstQueueItem.nextQueueItem;
        this.count--;
        return dequeuedValue;
    }

    front(): any {
        if (this.isEmpty() || !this.firstQueueItem) {
            return undefined;
        }
        return this.firstQueueItem.value;
    }

    size(): number {
        return this.count;
    }

    reverse(): any[] {
        const queueItems = this.empty();
        queueItems.reverse().forEach(item => this.enqueue(item));
        return queueItems;
    }

    empty(): any[] {
        const oldQueueItems = this.toArray();
        this.count = 0;
        this.firstQueueItem = null;
        this.lastQueueItem = null;
        return oldQueueItems;
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

    toArray(): any[] {
        const queueItems: any[] = [];
        let queueItem: QueueItem | null = this.firstQueueItem;
        while (queueItem) {
            queueItems.push(queueItem.value);
            queueItem = queueItem.nextQueueItem;
        }
        return queueItems;
    }

    static fromArray(array: any[], maxQueueCapacity: number | null = null): Queue {
        const queue = new Queue(maxQueueCapacity);
        array.forEach(item => queue.enqueue(item));
        return queue;
    }
}
