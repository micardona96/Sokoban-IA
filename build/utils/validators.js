"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThereBox = exports.isNotWall = exports.isNotEdge = void 0;
function isNotEdge(position, direction, map) {
    if (direction == 'U' && position[0] - 1 > 0)
        return true;
    else if (direction == 'D' && position[0] + 1 < map.length - 1)
        return true;
    else if (direction == 'R' && position[1] + 1 < map[0].length - 1)
        return true;
    else if (direction == 'L' && position[1] - 1 > 0)
        return true;
    else
        return false;
}
exports.isNotEdge = isNotEdge;
function isNotWall(position, direction, map) {
    if (direction == 'U' && map[position[0] - 1][position[1]] !== 'W')
        return true;
    else if (direction == 'D' && map[position[0] + 1][position[1]] !== 'W')
        return true;
    else if (direction == 'R' && map[position[0]][position[1] + 1] !== 'W')
        return true;
    else if (direction == 'L' && map[position[0]][position[1] - 1] !== 'W')
        return true;
    else
        return false;
}
exports.isNotWall = isNotWall;
function isThereBox(boxPositions, movePosition) {
    boxPositions.forEach(function (position) {
        if (position[0] == movePosition[0] && position[1] == movePosition[1])
            return position[0];
    });
    return -1;
}
exports.isThereBox = isThereBox;
