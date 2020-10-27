export interface StateWorld {
  map: string[][],
  initialPositionPlayer: number[],
  initialPositionBoxes: number[][],
  endPositionBoxes: number[][]
}

export interface Node {
  positionBoxes: number[][];
  positionPlayer: number[];
  path: string;
  deep: number;
}



