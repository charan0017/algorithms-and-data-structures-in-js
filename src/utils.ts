export function priorityPush(arr: number [], value: number) {
    const leastIndex = arr.findIndex(num => value < num);
    if (leastIndex < 0) {
        arr.push(value);
    } else {
        arr.splice(leastIndex, 0, value);
    }
}