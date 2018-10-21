class MStack {
  constructor(capability) {
    this.data = new Map();
    this.capability = capability;
  }

  isEmpty() {
    return this.data.size === 0;
  }

  isFull() {
    return this.data.size === this.capability;
  }

  push(item) {
    if (this.isFull()) return false;

    this.data.set(this.size, item);
    return true;
  }

  pop() {
    if (this.isEmpty()) return undefined; 

    let item = this.data.get(this.size - 1);
    this.data.delete(this.size - 1);
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.data.get(this.data.size - 1);
  }

  clear() {
    this.data.clear();
  }
}
