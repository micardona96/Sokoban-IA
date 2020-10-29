import { Node, StateWorld } from '../models/models';
import readMapFromFile from './../utils/ReadFile';
import { expandNode, isSolved } from './../controllers/controller';
import GenericQueue from '../models/GenericQueue';
import { Algorithm } from '../utils/constants';

const world: StateWorld = readMapFromFile('./../../test/nivel4.txt');


let queue: GenericQueue = new GenericQueue();
let mode: Algorithm = Algorithm.DFS;

let initialNode: Node = {
  deep: 0,
  path: '',
  positionBoxes: world.initialPositionBoxes,
  positionPlayer: world.initialPositionPlayer
}


//queue.enqueueFront(initialNode);
queue.enqueueBack([initialNode]);

let node: Node = queue.dequeue();

let contador = 0;

while(!isSolved(node, world.endPositionBoxes)){
  if(node.deep <= 64){
    contador++;
    expandNode(node, queue, world.map, mode);
  }

  console.log(contador)

  if(!queue.isEmpty()){
    queue.printQueue();
    node = queue.dequeue();
  }else{
    console.log("No se encontró solución");
    console.log("Último nodo");
    console.log(node);
    node = null;
    break;
  }

}

if(node !== null){
  console.log("La solución es: ");
  console.log(node)
}




/*
expandNode(initialNode, queue, world.map, Algorithm.BFS)
console.log(`Initial position player [ ${initialNode.positionPlayer[0]} , ${initialNode.positionPlayer[1]} ]`)
console.log('\n');
queue.printQueue();

*/
