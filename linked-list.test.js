import { describe, it, assert, expect } from "vitest";

import { LinkedList } from "./linked-list";

describe("Testing methods of LinkedList class", () => {
  const linkedList = new LinkedList();

  linkedList.append("first");
  linkedList.append("second");

  it("Should return the size of list", () => {
    assert.equal(linkedList.size(), 2);
  });

  it("Should return the first node", () => {
    expect(linkedList.head()).toHaveProperty("value");
    expect(linkedList.head()).toHaveProperty("nextNode");
    expect(linkedList.head()).toHaveProperty("value", "first");
  });

  it("Should return the first node", () => {
    expect(linkedList.tail()).toHaveProperty("value");
    expect(linkedList.tail()).toHaveProperty("nextNode");
    expect(linkedList.tail()).toHaveProperty("value", "second");
  });

  it("Should return the node given an index", () => {
    expect(linkedList.at(0)).toHaveProperty("value", "first");
  });

  it("Should remove the last Node", () => {
    linkedList.pop();

    expect(linkedList.tail()).toHaveProperty("value", "first");
  });

  it("Should return false if 'second' do not contains in the Node", () => {
    let result = linkedList.contains("second");
    expect(result).toBeFalsy();
  });

  it("Should return true if 'first' contains in the Node", () => {
    expect(linkedList.contains("first")).toBe(true);
  });

  it("Should return the index of the value existent in the list & return null if it's not.", () => {
    expect(linkedList.find("first")).toBe(0);
    expect(linkedList.find("second")).toBe(null);
  });

  it("Should return the list formated in String.", () => {
    linkedList.append("second");

    expect(linkedList.toString()).toBeTypeOf("string");
    expect(linkedList.toString()).toBe("( first ) -> ( second ) -> null");
  });
});

describe("Extra Methods", () => {
  const linkedList = new LinkedList();

  linkedList.append("first");
  linkedList.append("second");

  it("Should insert a Node in the given index.", () => {
    linkedList.inserAt("third", 1);

    expect(linkedList.size()).toBe(3);
    expect(linkedList.toString()).toBe(
      "( first ) -> ( third ) -> ( second ) -> null"
    );
  });

  it("Should return null when pass invalid index number to inserAt method.", () => {
    expect(linkedList.inserAt("third", 5)).toBe(null);
  });

  it("Should remove a Node in the given index.", () => {
    linkedList.removeAt(1);

    expect(linkedList.size()).toBe(2);
    expect(linkedList.toString()).toBe("( first ) -> ( second ) -> null");
  });

  it("Should return null when pass invalid index number to removeAt method.", () => {
    expect(linkedList.removeAt(5)).toBe(null);
  });
});
