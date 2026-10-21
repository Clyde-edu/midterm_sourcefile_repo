'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ============================================================================
// PART A: STACK
// ============================================================================

class Stack {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  push(element) {
    // Add an element to the top.
    this.items.push(element);
  }

  pop() {
    // Remove and return the top element.
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    // Return the top without removing it.
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements.
    return this.items.length;
  }

  toString() {
    // Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display peek, pop, remaining actions, and size.
console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());


// ============================================================================
// PART B: QUEUE
// ============================================================================

class Queue {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  enqueue(element) {
    // Add an element at the back.
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element.
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    // Return the front without removing it.
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    // Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements.
    return this.items.length;
  }

  toString() {
    // Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the front request.
console.log('Next Request:', waitingRequests.front());

// Dequeue two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining queue and its size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());


// ============================================================================
// PART C: PRIORITY QUEUE
// ============================================================================

class PriorityQueue {
  constructor() {
    // The internal storage.
    this.items = [];
  }

  enqueue(request, priority) {
    // Create an item containing the request and priority.
    // Find the correct insertion position.
    // Preserve arrival order when priorities are equal.
    const newItem = {
      request: request,
      priority: priority
    };

    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (newItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        added = true;
        break;
      }
    }

    if (added === false) {
      this.items.push(newItem);
    }
  }

  dequeue() {
    // Remove and return the first item.
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    // Return the number of items.
    return this.items.length;
  }

  print() {
    // These will display every request and priority.
    let text = '';
    for (let i = 0; i < this.items.length; i++) {
      text += this.items[i].request + ', Priority ' + this.items[i].priority;
      if (i < this.items.length - 1) {
        text += '\n';
      }
    }
    return text;
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// These enqueue the four required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// These will print the initial priority order.
console.log('Initial Priority Order:');
console.log(urgentRequests.print());

// Process the first request.
const processedRequest = urgentRequests.dequeue();
console.log('Processed Priority Request:', processedRequest.request + ', Priority ' + processedRequest.priority);

// Print the remaining requests.
console.log('Remaining Priority Requests:');
console.log(urgentRequests.print());


// ============================================================================
// PART D: LINKED LIST
// ============================================================================

class Node {
  constructor(element) {
    // Store the element and set next to null.
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Set length to zero and head to null.
    this.head = null;
    this.length = 0;
  }

  append(element) {
    // This adds a node at the end.
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  insert(position, element) {
    // Reject invalid positions.
    // Insert at the beginning, middle, or end.
    if (position < 0 || position > this.length) {
      return false;
    }

    const newNode = new Node(element);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      newNode.next = current;
      prev.next = newNode;
    }

    this.length++;
    return true;
  }

  removeAt(position) {
    // Reject invalid positions.
    // Remove the node at the requested position.
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }

    this.length--;
    return current.element;
  }

  indexOf(element) {
    // Traverse and return the matching position.
    // Return -1 when the element is absent.
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  remove(element) {
    // Reuse indexOf and removeAt.
    const pos = this.indexOf(element);
    return this.removeAt(pos);
  }

  isEmpty() {
    // Return true when no nodes exist.
    return this.length === 0;
  }

  size() {
    // Return the number of nodes.
    return this.length;
  }

  toString() {
    // Traverse and return all elements as text.
    let current = this.head;
    let text = '';

    while (current !== null) {
      text += current.element;
      if (current.next !== null) {
        text += '\n';
      }
      current = current.next;
    }

    return text;
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// Insert Ticket #405 at the end.
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Display the complete list.
console.log('Complete List:');
console.log(completedRequests.toString());

// Search for Ticket #402.
const targetIndex = completedRequests.indexOf('Ticket #402 - Printer Connected');
console.log('Index of Ticket #402:', targetIndex);

// Remove the item at position 1.
const removedAtPos1 = completedRequests.removeAt(1);
console.log('Removed at Position 1:', removedAtPos1);

// Remove Ticket #403 by value.
const removedByVal = completedRequests.remove('Ticket #403 - Antivirus Updated');
console.log('Removed by Value:', removedByVal);

// Display the final list and size.
console.log('Final List:');
console.log(completedRequests.toString());
console.log('Final Size:', completedRequests.size());