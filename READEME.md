class LinkedList {
    constructor() {
        this.root = {
            data: null,
            next: null,
        };
    };
    add(valueToAdd, valueAfter) {
        let addNode = this.root;
        while(addNode.data !== valueAfter && addNode.next !== null) {
            addNode = addNode.next;
      
          };
      
          addNode.next = {
            data: valueToAdd,
            next: addNode.next
          };
    };

    delet(value) {
        let deletNode = this.root;
        let previousNode;
        while(deletNode.data !== value && deletNode.next !== null) {
            previousNode = deletNode;
            deletNode = deletNode.next;
          };
         return previousNode.next = deletNode.next;
    };

    show() {
        console.log(this.root);
    }
    append(value) {
        const node = {
            data: value,
            next: null,
        };
        let lastNode = this.root;

        while(lastNode.next !== null) {
            lastNode = lastNode.next;
        };
        lastNode.next = node;
    }
    find(value) {
        let targetNode = this.root;
        while(targetNode.data !== value && targetNode.next !== null) {
            targetNode = targetNode.next
        };
        return targetNode.data === value ? targetNode : null;
    };  
};
const LinkedList1 = new LinkedList();
LinkedList1.append(22);
console.log(LinkedList1.find(15));
LinkedList1.add(15,22);
LinkedList1.add(10,2223);
LinkedList1.add(2,22212);
LinkedList1.add(5,212312);
LinkedList1.delet(10);
LinkedList1.show();