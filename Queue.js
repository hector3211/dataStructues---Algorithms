class Queue {
  // constructor is like our global variables to start out with
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  // inserting into our queue
  enqueue(element) {
    if (!this.tail) {
      return undefined;
    }
    // we add from our tail side
    /*
     * so we say at this point in memory we want to add our element
     * then we call tail++ so for our next element
     * we can save it in that point in memeory
     */
    this.elements[this.tail] = element;
    this.tail++;
  }
  // popping head off queue
  dequeue() {
    // if no head return
    if (!this.head) {
      return undefined;
    }
    // we delete from our head
    const item = this.elements[this.head];
    delete this.elements[this.head];
    // then we tell the queue to go to the next element
    this.head++;
    return item;
  }
  // returns front of the queue
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.Length === 0;
  }
}

let q = new Queue();
// this creates a queue from 1-7
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
console.log(q.peek());
console.log(q.length);
