export function Node(input) {
  return {
    value: input || null,
    nextNode: null,
  };
}

export class LinkedList {
  constructor() {
    this.length = 0;
    this.list = null;
  }

  // adds a new node to the end of the list
  append(value) {
    const node = new Node(value);
    if (!this.list) {
      this.list = node;
    } else {
      let current = this.list;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.length++;
  }

  //adds a new node to the start of the list
  prepend(value) {
    const node = new Node(value);
    const tempList = this.list;

    node.nextNode = tempList;

    this.list = node;
    this.length++;
  }

  //returns the total number of nodes in the list
  size() {
    return this.length;
  }

  //returns the first node in the list
  head() {
    return this.list;
  }

  //returns the last node in the list
  tail() {
    if (!this.list) {
      return this.list;
    } else {
      let currentList = this.list;
      while (currentList.nextNode) {
        currentList = currentList.nextNode;
      }
      return currentList;
    }
  }

  //returns the node at the given index
  at(index) {
    let list = 0;
    let current = this.list;
    while (list !== index) {
      current = current.nextNode;
      list++;
    }
    return current;
  }

  //removes the last element from the list
  pop() {
    let current = this.list;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    console.log(current);
    current.nextNode = null;
  }

  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.list;
    let index = this.size();
    for (let i = 0; i < index; i++) {
      if (current.value === value) {
        return true;
      }
      if (current.nextNode === null) {
        return false;
      }
      current = current.nextNode;
    }
    return false;
  }

  //returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.list;
    let index = this.size();
    for (let i = 0; i < index; i++) {
      if (current.value === value) {
        return i;
      }
      if (current.nextNode === null) {
        return null;
      }
      current = current.nextNode;
    }
  }

  //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  toString() {
    let list = this.list;
    let result = [];
    while (list.nextNode) {
      result.push(`( ${list.value} )`);
      list = list.nextNode;
    }
    result.push(`( ${list.value} ) -> null`);
    return result.join(" -> ");
  }

  //inserts a new node with the provided value at the given index.
  inserAt(value, index) {
    let size = this.length;
    let list = this.list;
    if (index >= size) {
      return null;
    }
    for (let i = 0; i < size; i++) {
      if (i === index) {
        if (index === 0) {
          this.prepend(value);
          return;
        }
        let newNode = new Node(value);
        let oldNode = this.at(index - 1);

        newNode.nextNode = list;
        oldNode.nextNode = newNode;

        this.length++;
        return;
      }
      if (list.nextNode !== null) {
        list = list.nextNode;
      }
    }
  }

  //that removes the node at the given index.
  removeAt(index) {
    let size = this.length;
    let list = this.list;
    if (index >= size) {
      return null;
    }
    for (let i = 0; i < size; i++) {
      if (i === index) {
        if (index === 0) {
          this.list = this.list.nextNode;
          return;
        }

        let next = list.nextNode;
        let previous = this.at(i - 1);

        previous.nextNode = next;

        this.length--;
        return;
      }
      if (list.nextNode !== null) {
        list = list.nextNode;
      }
    }
  }
}

const linkedList = new LinkedList();

linkedList.append("first");

linkedList.append("second");

linkedList.prepend("one");

linkedList.inserAt("third", 2);

linkedList.removeAt(2);

console.log(linkedList.toString());
