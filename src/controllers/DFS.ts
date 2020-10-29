import { Node, StateWorld } from '../models/models';
import readMapFromFile from './../utils/ReadFile';
import { expandNode, isSolved } from './../controllers/controller';
import GenericQueue from '../models/GenericQueue';
import { Algorithm } from '../utils/constants';

//ESTADO INICIAL DEL MUNDO
const world: StateWorld = readMapFromFile('./../../test/nivel_prueba.txt');

let initialNode: Node = {
  deep: 0,
  path: '',
  positionBoxes: world.initialPositionBoxes,
  positionPlayer: world.initialPositionPlayer
}

BFSAlgorithm(initialNode, world);


function BFSAlgorithm(initialNode: Node, world: StateWorld){

  let queue: GenericQueue = new GenericQueue();
  let mode: Algorithm = Algorithm.DFS;
  let level: number = 0;
  
  queue.enqueueBack([initialNode]);

  let currentNode: Node = queue.dequeue();

  while(!isSolved(currentNode, world.endPositionBoxes)){
    if(currentNode.deep < 64){
      expandNode(currentNode, queue, world.map, mode);
    }
  
    if(!queue.isEmpty()){
      currentNode = queue.dequeue();
      /*
      if(currentNode.deep > level){
        level = currentNode.deep;
        console.log(level);
      }
      */
      //GenericQueue.printNode(currentNode);
    }else{
      console.log("No se encontró solución");
      console.log("Último nodo");
      console.log(currentNode);
      currentNode = null;
      break;
    }
  }

  if(currentNode !== null){
    console.log("La solución es: ");
    console.log(currentNode)
  }
}