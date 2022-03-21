interface IGenericStack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type GenericStackNode<T> = {
  readonly value: T;
  readonly next?: GenericStackNode<T>;
};

class GenericStackImple<T> implements IGenericStack<T> {
  private _size: number = 0;
  private head?: GenericStackNode<T>;

  get size(): number {
    return this._size;
  }
  push(value: T): void {
    const node: GenericStackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      // null == undefined  null!== undefined
      throw Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node?.value;
  }
}

const genericStringStack = new GenericStackImple<string>();
genericStringStack.push("Eunji");
genericStringStack.push("Jihoon");
while (genericStringStack.size !== 0) {
  console.log(genericStringStack.pop());
}
//genericStringStack.pop();

const genericNumberStack = new GenericStackImple<number>();
genericNumberStack.push(2);
genericNumberStack.push(3);
while (genericNumberStack.size !== 0) {
  console.log(genericNumberStack.pop());
}
//genericNumberStack.pop();
