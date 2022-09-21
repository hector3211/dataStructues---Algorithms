type Nodes<T> = {
    value:T,
    prev?: Nodes<T>,
    next?: Nodes<T>,

    constructor(){
        this.length = 0
    }
}
