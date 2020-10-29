import { Node, StateWorld } from '../models/models';
import readMapFromFile from './../utils/ReadFile';
import { expandNode, isSolved } from './../controllers/controller';
import GenericQueue from '../models/GenericQueue';
import { Algorithm } from '../utils/constants';

const world: StateWorld = readMapFromFile('./../../test/nivel1.txt');


let queue: GenericQueue = new GenericQueue();
let mode: Algorithm = Algorithm.BFS;

let initialNode: Node = {
  deep: 0,
  path: '',
  positionBoxes: world.initialPositionBoxes,
  positionPlayer: world.initialPositionPlayer
}


queue.enqueueBack([initialNode]);

let node: Node = queue.dequeue();


runBreathDeep();
//runDeepIteration();


if(node !== null){
  console.log("La solución es: ");
  console.log(node)
}


function runBreathDeep(){
  while(!isSolved(node, world.endPositionBoxes)){
    if(node.deep <= 64){
      expandNode(node, queue, world.map, mode);
      console.log(queue.items.length)
    }

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
}

function runDeepIteration(){

  let level = 0;

  while(!isSolved(node, world.endPositionBoxes)){
    if(node.deep <= level){
      expandNode(node, queue, world.map, mode);
    }
  
    if(!queue.isEmpty()){
      queue.printQueue();
      node = queue.dequeue();
    }else if(queue.isEmpty() && level < 64){
      queue.enqueueBack([initialNode]);
      level++;
    }else{
      console.log("No se encontró solución");
      console.log("Último nodo");
      console.log(node);
      node = null;
      break;
    }
  }
}



/*
expandNode(initialNode, queue, world.map, Algorithm.BFS)
console.log(`Initial position player [ ${initialNode.positionPlayer[0]} , ${initialNode.positionPlayer[1]} ]`)
console.log('\n');
queue.printQueue();

*/
