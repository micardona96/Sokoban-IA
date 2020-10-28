import { readFileSync } from 'fs';
import { StateWorld } from './../models/models';

function readMapFromFile(path: string): StateWorld{

  let map: string[][] = [];
  let initialPositionBoxes: number[][] = [];
  let initialPositionPlayer: number[] = [];
  let endPositionBoxes: number[][] = []; 

  const content = readFileSync(path, 'utf8');
  const lines = content.split(/\r?\n/);

  let counter = 0;
  lines.forEach(line => {
    if(line.startsWith('W') || line.startsWith('X') || line.startsWith('0')){
      map.push(Array.from(line));
    }else if(typeof parseInt(line[0]) === 'number'){
      if(counter === 0){
        initialPositionPlayer = line.split(',').map(value => parseInt(value));
        counter++;
      }else if(line !== '') {
        initialPositionBoxes.push(line.split(',').map(value => parseInt(value)));
      } 
    }
  })

  map.forEach((row, indexRow) => {
    row.forEach((col,indexCol) => {
      if(map[indexRow][indexCol] === 'X'){
        endPositionBoxes.push([indexRow, indexCol])
      }
    })
  })


  return {
    map,
    initialPositionPlayer,
    initialPositionBoxes,
    endPositionBoxes,
  }
}

export default readMapFromFile;