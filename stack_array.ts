interface ImStack {
  push(str: string): void;
  pop(): string;
}

class Stack implements ImStack {
  arr: string[] = [];
  index: number = 0;

  push(str: string): void {
    this.arr[this.index] = str;
    this.index++;
  }
  pop(): string {
    if (this.index === 0) {
      throw Error("Array is empty");
    }
    this.index--;
    return this.arr[this.index];
  }
}

const stack1 = new Stack();
stack1.push("hello");
stack1.pop();
stack1.pop();
stack1.push("hello eunji");
stack1.push("hello jihoon");
stack1.pop();
stack1.pop();
stack1.pop();
