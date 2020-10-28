"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function readMapFromFile(path) {
    var map = [];
    var initialPositionBoxes = [];
    var initialPositionPlayer = [];
    var endPositionBoxes = [];
    var content = fs_1.readFileSync(path, 'utf8');
    var lines = content.split(/\r?\n/);
    var counter = 0;
    lines.forEach(function (line) {
        if (line.startsWith('W') || line.startsWith('X') || line.startsWith('0')) {
            map.push(Array.from(line));
        }
        else if (typeof parseInt(line[0]) === 'number') {
            if (counter === 0) {
                initialPositionPlayer = line.split(',').map(function (value) { return parseInt(value); });
                counter++;
            }
            else if (line !== '') {
                initialPositionBoxes.push(line.split(',').map(function (value) { return parseInt(value); }));
            }
        }
    });
    map.forEach(function (row, indexRow) {
        row.forEach(function (col, indexCol) {
            if (map[indexRow][indexCol] === 'X') {
                endPositionBoxes.push([indexRow, indexCol]);
            }
        });
    });
    return {
        map: map,
        initialPositionPlayer: initialPositionPlayer,
        initialPositionBoxes: initialPositionBoxes,
        endPositionBoxes: endPositionBoxes,
    };
}
exports.default = readMapFromFile;
