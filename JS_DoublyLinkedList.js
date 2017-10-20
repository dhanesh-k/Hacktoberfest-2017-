// Hacktoberfest!!!
// JavaScript Doubly Linked List
// https://github.com/hacktoberfest17/programming/issues/720


function Node(data){
	this.data = data;
	this.prev = null;
	this.next = null;
}

function DoublyLinkedList(){
	this._length = 0;
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.length = function(){
	return this._length;
}

DoublyLinkedList.prototype.addAtFront = function(data) {
	var newNode = new Node(data);
	if(!data) {
		console.error("No data given!");
	} else {
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this._length++;
	}

}

DoublyLinkedList.prototype.addAtIndex = function(data, index) {
	var newNode = new Node(data);
	var temp = this.head;
	var location = 1;

	if(this._length == 0) {
		addAtFront(data);
	} else if(index > this._length) {
		console.error("No such index in list!");
	} else {
		while(location != index) {
			temp = temp.next;
			location++;
		}
		newNode.prev = temp;
		newNode.next = temp.next;
		temp.next.prev = newNode;
		temp.next = newNode;
		this._length++;
	}
}


DoublyLinkedList.prototype.addAtEnd = function(data) {
	var newNode = new Node(data);
	if(!data) {
		console.error("No data given!");
	} else {
		if(this._length > 0) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.tail = newNode;
		}
		this._length++;
	}
}

DoublyLinkedList.prototype.removeFirst = function() {
	if(this._length == 0) {
		console.error("No nodes in list!");
	} else {
		this.head = this.head.next;
		this.head.prev = null;
		this._length--;
	}
}

DoublyLinkedList.prototype.removeLast = function() {
	if(this._length == 0) {
		console.error("No nodes in list!");
	} else {
		this.tail = this.tail.prev;
		this.tail.next = null;
		this._length--;
	}
}


DoublyLinkedList.prototype.contains = function(data) {
	var temp = this.head;

	if(this._length == 0) {
		console.error("No nodes in list!");
	} else {
		while(temp) {
			if(temp.data == data) {
				return true;
			}
			temp = temp.next;
		}
		return false; // data not found or list exceeded
	}
}

// test it

var dll = new DoublyLinkedList();
dll.addAtEnd("hi"); 
dll.addAtEnd("bye");
dll.addAtEnd("it is really late rn");
dll.addAtEnd("good morning!"); // hi -> <- bye -> <- it is really late rn -> <- good morning!
console.log(dll.length()); // 4
console.log(dll.head.data); // hi
console.log(dll.tail.data); // good morning

dll.removeFirst(); // bye -> <- it is really late rn -> <- good morning!
console.log(dll.length()); // 3
dll.addAtIndex("hello", 1); // bye -> <- hello -> <- it is really late rn -> <- good morning!
 
console.log(dll.head.data); // bye
console.log(dll.tail.data); // good morning

console.log(dll.length()); // 4
dll.removeFirst(); //  hello -> <- it is really late rn -> <- good morning!
console.log(dll.length()); // 3
console.log(dll.head.data); // hello
console.log(dll.tail.data); // good morning

console.log("what");
dll.removeLast(); // hello -> <- it is really late rn 
console.log(dll.head.data); // hello
console.log(dll.tail.data); // it is really late rn

dll.removeFirst(); // it is really late rn 
console.log(dll.length()); // 1

console.log(dll.contains("it is really late rn")); // true
console.log(dll.head.data); // it is really late rn
console.log(dll.tail.data); // it is really late rn
console.log(dll.contains("hi")); // false

