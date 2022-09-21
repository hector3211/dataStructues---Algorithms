type ANode<T> = {
    value:T,
    prev?: ANode<T>,
    next?: ANode<T>,
}

class main<T>{
    public lenght:number
    private head?: ANode<T>

    constructor(){
        this.lenght = 0
        this.head = undefined
    }
    prepend(item:T):void{
        const node = {value:item} as ANode<T>
        this.lenght++
        if(!this.head){
            this.head = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    insertAt(item:T,idx:number):void{

    }
}
