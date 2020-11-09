import { Node, StateWorld } from '../models/models';
import readMapFromFile from './../utils/ReadFile';
import { expandNode, isSolved } from './../controllers/controller';
import GenericQueue from '../models/GenericQueue';
import { Algorithm } from '../utils/constants';

const world: StateWorld = readMapFromFile(process.argv[2]);


let initialNode: Node = {
  deep: 0,
  path: '',
  positionBoxes: world.initialPositionBoxes,
  positionPlayer: world.initialPositionPlayer
}

runDeepIteration();

function runDeepIteration(){

  let queue: GenericQueue = new GenericQueue();
  let mode: Algorithm = Algorithm.DFS;
  let expandedNodes: Node[] = [];
  let level = 0;

  queue.enqueueBack([initialNode]);
  let currentNode: Node = queue.dequeue();
  let cost = 0
  while(!isSolved(currentNode, world.endPositionBoxes)){
    if(currentNode.deep <= level){
      expandNode(currentNode, queue, world.map, mode, expandedNodes);
      expandedNodes.push(currentNode);
    }

    if(!queue.isEmpty()){
      // cost++
      currentNode = queue.dequeue();
      // GenericQueue.printNode(currentNode);
    }else if(queue.isEmpty() && level < 64){
      queue.enqueueBack([initialNode]);
      expandedNodes = [];
      level++;
      // console.log(cost)
      // cost = 0
    }else{
      console.log("No se encontró solución");
      console.log("Último nodo");
      console.log(currentNode);
      currentNode = null;
      console.log(level)
      break;
    }
  }

  if(currentNode !== null){
    // console.log("La solución es: ");
    console.log(currentNode.path)
  }
}