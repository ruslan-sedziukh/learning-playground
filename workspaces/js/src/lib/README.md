# This project implements the Doubly Linked List collection

A linked list is a linear data structure where elements are not stored in contiguous memory locations. Instead, each element, called a node, contains two parts:

1. **Data:** The actual data to be stored.
2. **Link:** A reference or pointer to the next node in the list.

## Singly Linked List

In a singly linked list, each node points to the next node, forming a chain. The first node is called the head, and the last node's link is typically NULL.

**Operations on singly Linked List:**

* **Insertion:**
  * **At the beginning:** Create a new node, point its link to the current head, and make the new node the head.
  * **At the end:** Traverse the list to the last node, create a new node, point the last node's link to the new node.
  * **At a specific position:** Traverse to the desired position, create a new node, and adjust the links of the previous and next nodes.
* **Deletion:**
  * **At the beginning:** Make the second node the new head.
  * **At the end:** Traverse to the second-to-last node and set its link to NULL.
  * **At a specific position:** Traverse to the previous node, adjust its link to skip the node to be deleted.
* **Traversal:** Start from the head and follow the links to visit each node.

## Doubly Linked List

In a doubly linked list, each node points to both the next and the previous nodes. This allows for efficient traversal in both directions.

**Operations on Doubly Linked List:**

* **Insertion and Deletion:** Similar to singly linked lists, but additional care is needed to adjust both the next and previous links.
* **Traversal:** Can be done in both forward and backward directions.

## Circular Linked List

A circular linked list is a variation where the last node's link points back to the first node, forming a circular structure.

**Operations on Circular Linked List:**

* **Insertion and Deletion:** Similar to regular linked lists, but special care is needed to handle the circular nature.
* **Traversal:** Can be done continuously without reaching the end.

**Key Advantages of Linked Lists:**

* **Dynamic Size:** Linked lists can grow or shrink dynamically as needed.
* **Efficient Insertion and Deletion:** Elements can be inserted or deleted at any position efficiently.
* **Flexibility:** Linked lists can be used to implement various data structures like stacks, queues, and trees.

**Key Disadvantages of Linked Lists:**

* **Random Access is Inefficient:** Accessing a specific element requires traversing the list from the beginning.
* **Memory Overhead:** Each node requires extra memory for the link pointer.

## Exercises

* Implement `insertBefore` functionality for the provided code and associated unit testing
* Implement `SList` class with functionality for singly linked list and associated unit testing. For simplicity the Iterators and Nodes can be reused
* Implement `CList` class with functionality for circular linked list and associated unit testing.

## References for further study
- [Singly Linked List](https://www.geeksforgeeks.org/singly-linked-list-tutorial/)
- [Doubly Linked List](https://www.geeksforgeeks.org/doubly-linked-list/)
- [Circular Linked List](https://www.geeksforgeeks.org/circular-linked-list/)


By understanding these concepts and their operations, you can effectively use linked lists in various data structures and algorithms.
