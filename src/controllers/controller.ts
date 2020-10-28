import GenericQueue from "../models/GenericQueue";
import { Node } from './../models/models';
import { isNotEdge, isNotWall, isThereBox } from './../utils/validators';
import { Algorithm } from '../utils/constants';
import { MOVEMENTS } from './../utils/constants';

export function expandNode({ positionPlayer, deep, path, positionBoxes }: Node, queue: GenericQueue, map: string[][], mode: Algorithm) : void{

  MOVEMENTS.forEach(({ direction, addValue, isRow }) => {
    if(isNotEdge(positionPlayer, direction, map) && isNotWall(positionPlayer, direction, map)){
      let newPositionBoxes: number[][] = positionBoxes.slice();
      let indexBox;
      if(isRow)
        indexBox = isThereBox(positionBoxes, [positionPlayer[0] + addValue, positionPlayer[1]]);
      else
        indexBox = isThereBox(positionBoxes, [positionPlayer[0], positionPlayer[1] + addValue]);

      if( indexBox >= 0 && isNotEdge(positionBoxes[indexBox], direction, map) && isNotWall(positionBoxes[indexBox], direction, map)){
        if(isRow)
          newPositionBoxes[indexBox] = [positionPlayer[0] + addValue*2, positionPlayer[1]]
        else
          newPositionBoxes[indexBox] = [positionPlayer[0], positionPlayer[1] + addValue*2 ]
      }

      let newNode: Node = {
        positionPlayer: [positionPlayer[0] - 1,  positionPlayer[1]],
        deep: deep + 1,
        path: path.concat(` ${direction}`),
        positionBoxes: newPositionBoxes
      }

      insertNodeToQueue(queue, newNode, mode);

    }
  })
}


function insertNodeToQueue(queue: GenericQueue, node: Node, mode: Algorithm){
  switch(mode){
    case Algorithm.BFS:
      queue.enqueueFront(node);
      break;
    case Algorithm.DFS:
      queue.enqueueBack(node);
      break;
    default:
      queue.enqueueFront(node);
      break;
  }
}

function isSolved(node: Node, finalPositionBoxes: number[][]){
  let countCorrectPosition = 0;
  for(let boxPosition of node.positionBoxes){
    for(let finalPosition of finalPositionBoxes){
      if(boxPosition === finalPosition){
        countCorrectPosition++
      }
    }
  }

  if(countCorrectPosition === finalPositionBoxes.length)
    return true;
  else
    return false;

}