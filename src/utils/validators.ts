export function isNotEdge(position: number[], direction: string, map: string[][]) : boolean {
  if(direction == 'U' && position[0] - 1 > 0) return true
  else if(direction == 'D' && position[0] + 1 < map.length -1) return true
  else if(direction == 'R' && position[1] + 1 < map[0].length -1) return true
  else if(direction == 'L' && position[1] - 1 > 0)return true
  else return false
}

export function isNotWall(position: number[], direction: string, map: string[][]) : boolean{
  if(direction == 'U' && map[position[0] - 1][position[1]] !== 'W') return true
  else if(direction == 'D' && map[position[0] + 1][position[1]] !== 'W') return true
  else if(direction == 'R' && map[position[0]][position[1] + 1] !== 'W') return true
  else if(direction == 'L' && map[position[0]][position[1] - 1] !== 'W')return true
  else return false
}

export function isThereBox(boxPositions: number[][], movePosition: number[]) : number {

  let index = null;

  for(let i = 0; i < boxPositions.length; i++){
    if(boxPositions[i][0] === movePosition[0] && boxPositions[i][1] === movePosition[1]) {
      return i;
    }
  }

  return -1;
}




