//this is the structure for the list itself
function linkedList() {
    this.head = null;
    this.tail = null;
}

//this is the structure for the node itself
function node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Now will try to add nodes to the begining of the linkedList
dLinkedList.prototype.addToBegin = function (value) {
    const newNode = new node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};


//Creating list of familly members :D
const FamilyList = new dLinkedList();
FamilyList.addToBegin('Mostafa');
FamilyList.addToBegin('Tasneem');
FamilyList.addToBegin('Tameema');
console.log(FamilyList);