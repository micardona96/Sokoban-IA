import { Node } from './../models/models';

function isNotEdge(position: number[], direction: string, map: string[][]) : boolean {
  if(direction == 'U' && position[0] - 1 > 0) return true
  else if(direction == 'D' && position[0] + 1 < map.length -1) return true
  else if(direction == 'R' && position[1] + 1 < map[0].length -1) return true
  else if(direction == 'L' && position[1] - 1 > 0)return true
  else return false
}

function isNotWall(position: number[], direction: string, map: string[][]) : boolean{
  if(direction == 'U' && map[position[0] - 1][position[1]] !== 'W') return true
  else if(direction == 'D' && map[position[0] + 1][position[1]] !== 'W') return true
  else if(direction == 'R' && map[position[0]][position[1] + 1] !== 'W') return true
  else if(direction == 'L' && map[position[0]][position[1] - 1] !== 'W')return true
  else return false
}

function isThereBox(boxPositions: number[][], movePosition: number[]) : boolean{
  boxPositions.forEach(position => {
    if(position[0] == movePosition[0] && position[1] == movePosition[1]) return true
  })
  
  return false;

}




