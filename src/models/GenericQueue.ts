import { Node } from './../models/models';
 
class GenericQueue {
  items: Node[];

  constructor() {
    this.items = [];
  }

  enqueueFront(elements: Node[]) : void {
    this.items = this.items.concat(elements);
  }

  enqueueBack(elements: Node[]) : void {
    this.items = elements.concat(this.items);
  }


  dequeue() : Node {
    let shiftNode = this.items.shift();
    return shiftNode
  }

  isEmpty() : boolean {
    return this.items.length === 0;
  }

  static printNode(node: Node){
    console.log(`Position player: [ ${node.positionPlayer[0]}, ${node.positionPlayer[1]} ]`)
    console.log(`Position boxes:`)
    for(let box of node.positionBoxes){
      console.log(`[ ${box[0]}, ${box[1]} ]`)
    }
    console.log(`Deep: ${node.deep}`)
    console.log(`Path: ${node.path}`)
    console.log('\n');
  }

  printQueue(): void {
    console.log('Generic Queue')
    for(let node of this.items){
      GenericQueue.printNode(node);
    }
  }
}

export default GenericQueue;