export default class Stack {
    private count: number = 0;
    private storage: { [key: number]: any } = {};

    push(item: any): void {
        this.storage[this.count] = item;
        this.count++;
    }

    pop(): any {
        if (this.count < 1) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek(): any {
        return this.storage[this.count - 1];
    }

    size(): number {
        return this.count;
    }

    reverse(): any[] {
        const stackItems = this.empty();
        stackItems.reverse().forEach(item => this.push(item));
        return stackItems;
    }

    empty(): any[] {
        const oldStackItems = this.toArray();
        this.count = 0;
        this.storage = {};
        return oldStackItems;
    }

    isEmpty(): boolean {
        return (this.size() === 0);
    }

    toArray(): any[] {
        const oldStackItems: any[] = [];
        for (let i: number = 0; i < this.size(); i++) {
            oldStackItems[i] = this.storage[i];
        }
        return oldStackItems;
    }

    static fromArray(array: any[]): Stack {
        const stack = new Stack();
        array.forEach(item => stack.push(item));
        return stack;
    }
}
