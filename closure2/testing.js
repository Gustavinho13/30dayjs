class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() {
        return this.n++;
    }
}

// Hidden State, aka let n = 10
const counter = new Counter(10)
console.log(counter.increment())
console.log(counter.increment())
