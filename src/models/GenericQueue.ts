import { Node } from './../models/models';
 
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
      console.log(`Position player: [ ${node.positionPlayer[0]}, ${node.positionPlayer[1]} ]`)
      console.log(`Position boxes:`)
      for(let box of node.positionBoxes){
        console.log(`[ ${box[0]}, ${box[1]} ]`)
      }
      console.log(`Deep: ${node.deep}`)
      console.log(`Path: ${node.path}`)
      console.log('\n');
    }
  }
}

export default GenericQueue;