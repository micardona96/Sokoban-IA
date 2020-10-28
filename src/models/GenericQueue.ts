import { Node } from './models';

class GenericQueue {
  items: Node[];

  constructor() {
    this.items = [];
  }

  enqueueFront(element: Node) : void {
    this.items.push(element);
  }

  enqueueBack(element: Node) : void {
    this.items.splice(0,0, element);
  }


  dequeue() : Node {
    let shiftNode = this.items.shift();
    return shiftNode
  }

  isEmpty() : boolean {
    return this.items.length == 0;
  }

  printQueue(): void {
    console.log('Generic Queue')
    for(let node of this.items){
      
    }
  }
}

export default GenericQueue;