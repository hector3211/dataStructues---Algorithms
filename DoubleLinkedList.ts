type ANode<T> = {
  value: T;
  prev?: ANode<T>;
  next?: ANode<T>;
};

class main<T> {
  public length: number;
  private head?: ANode<T>;
  private tail?: ANode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }
  prepend(item: T): void {
    const node = { value: item } as ANode<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("something happend, index is higher than length");
    } else if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
    }
    this.length++;
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }
    curr = curr as ANode<T>;
    const node = { value: item } as ANode<T>;
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if (curr.prev) {
      curr.prev.next = curr;
    }
  }

  append(item: T): void {
    this.length++;
    const node = { value: item } as ANode<T>;
    if (!this.tail) {
      this.head = this.tail = node;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) {
      return undefined;
    }
    this.length--;
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }
    if (curr.prev) {
      curr.prev = curr.next;
    }
    if (curr.next) {
      curr.next = curr.prev;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }
    curr.prev = curr.next = undefined;
    return curr.value;
  }
}
