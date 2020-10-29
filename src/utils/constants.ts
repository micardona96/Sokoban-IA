export enum Algorithm {
  BFS,
  DFS
}

export let MOVEMENTS = [
  { direction: 'U', isRow: true, addValue: -1},
  { direction: 'D', isRow: true, addValue: 1},
  { direction: 'L', isRow: false, addValue: -1},
  { direction: 'R', isRow: false, addValue: 1},
]