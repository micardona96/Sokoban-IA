import { Node, StateWorld } from '../models/models';
import readMapFromFile from './../utils/ReadFile';
import { expandNode } from './../controllers/controller';
import GenericQueue from '../models/GenericQueue';
import { Algorithm } from '../utils/constants';

const world: StateWorld = readMapFromFile('./../../test/nivel1.txt');
let queue: GenericQueue = new GenericQueue();

let initialNode: Node = {
  deep: 0,
  path: '',
  positionBoxes: world.initialPositionBoxes,
  positionPlayer: world.initialPositionPlayer
}

expandNode(initialNode, queue, world.map, Algorithm.BFS);



console.log(`Initial position player [ ${initialNode.positionPlayer[0]} , ${initialNode.positionPlayer[1]} ]`)
console.log('\n');
queue.printQueue();