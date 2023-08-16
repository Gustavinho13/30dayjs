class Counter {
    constructor(init) {
        this.init = init
        this.n = init
    }

    increment= () => ++this.n; 

    decrement = () => --this.n;

    reset = () => {
        this.n = init;
        return this.n;
    }
}
