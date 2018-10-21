class OStack {
  constructor(capability) {
    this.data = {};
    this.size = 0;
    this.capability = capability;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.data.size === this.capability;
  }

  push(item) {
    if (this.isFull()) return false;

    this.data[this.size] = item;
    this.size++;
    return true;
  }

  pop() {
    if (this.isEmpty()) return undefined; 

    let item = this.data[this.size - 1];
    delete this.data[this.size - 1];
    this.size--;
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.data[this.data.size - 1];
  }

  clear() {
    while(!this.isEmpty()) this.pop();
  }
}
