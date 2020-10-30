import GenericQueue from "../models/GenericQueue";
import { Node } from './../models/models';
import { isNotEdge, isNotWall, isThereBox } from './../utils/validators';
import { Algorithm } from '../utils/constants';
import { MOVEMENTS } from './../utils/constants';

export function expandNode({ positionPlayer, deep, path, positionBoxes }: Node, queue: GenericQueue, map: string[][], mode: Algorithm, expandedNodes: Node[]) : void{

  let nodesToInsert: Node[] = []

  MOVEMENTS.forEach(({ direction, addValue, isRow }) => {
    if(isNotEdge(positionPlayer, direction, map) && isNotWall(positionPlayer, direction, map)){
      let newPositionBoxes: number[][] = positionBoxes.slice();
      let newPositionPlayer: number[] = positionPlayer.slice();

      if(isRow && isThereBox(positionBoxes, [positionPlayer[0] + addValue, positionPlayer[1]]) < 0){
        newPositionPlayer[0] = positionPlayer[0] + addValue;
      }else if(!isRow && isThereBox(positionBoxes, [positionPlayer[0], positionPlayer[1] + addValue]) < 0){
        newPositionPlayer[1] = positionPlayer[1] + addValue;
      }else {
        let indexBox;
        if(isRow){
          indexBox = isThereBox(positionBoxes, [positionPlayer[0] + addValue, positionPlayer[1]]);
        }
        else{
          indexBox = isThereBox(positionBoxes, [positionPlayer[0], positionPlayer[1] + addValue]);
        }

        if(isNotEdge(positionBoxes[indexBox], direction, map) && isNotWall(positionBoxes[indexBox], direction, map)){
          if(isRow && isThereBox(positionBoxes, [positionPlayer[0] + addValue*2, positionPlayer[1]]) < 0){
            newPositionBoxes[indexBox] = [positionPlayer[0] + addValue*2, positionPlayer[1]]
            newPositionPlayer[0] = positionPlayer[0] + addValue;
          }
          else if(!isRow && isThereBox(positionBoxes, [positionPlayer[0], positionPlayer[1] + addValue*2 ]) < 0){
            newPositionBoxes[indexBox] = [positionPlayer[0], positionPlayer[1] + addValue*2]
            newPositionPlayer[1] = positionPlayer[1] + addValue;
          }
        }
      }

      if(!isNodeExplored(newPositionPlayer, newPositionBoxes, expandedNodes)){
        let newNode: Node = {
          positionPlayer: newPositionPlayer,
          deep: deep + 1,
          path: path.concat(` ${direction}`),
          positionBoxes: newPositionBoxes
        }
        nodesToInsert.push(newNode);
      }
    }
  })

  insertNodeToQueue(queue, nodesToInsert, mode);

}


function insertNodeToQueue(queue: GenericQueue, nodes: Node[], mode: Algorithm){
  switch(mode){
    case Algorithm.BFS:
      queue.enqueueFront(nodes);
      break;
    case Algorithm.DFS:
      queue.enqueueBack(nodes);
      break;
    default:
      queue.enqueueFront(nodes);
      break;
  }
}

export function isSolved(node: Node, finalPositionBoxes: number[][]){

  let countCorrectPosition = 0;

  for(let boxPosition of node.positionBoxes){
    for(let finalPosition of finalPositionBoxes){
      if(boxPosition[0] === finalPosition[0] && boxPosition[1] === finalPosition[1]){
        countCorrectPosition++
      }
    }
  }

  if(countCorrectPosition === finalPositionBoxes.length)
    return true;
  else
    return false;
}

function isNodeExplored(positionPlayer: number[], positionBoxes: number[][], exploredNodes: Node[]) : boolean {
  let numberEqualBoxes = 0;
  for(let node of exploredNodes){
    if(node.positionPlayer[0] === positionPlayer[0] && node.positionPlayer[1] === positionPlayer[1]){
        for(let i = 0; i<positionBoxes.length; i++){
          if(positionBoxes[i][0] === node.positionBoxes[i][0] &&  positionBoxes[i][1] === node.positionBoxes[i][1]){
            numberEqualBoxes++;
          }
        }
    }

    if(numberEqualBoxes === positionBoxes.length){
      return true;
    }else{
      numberEqualBoxes = 0;
    }
  }

  return false;

}
