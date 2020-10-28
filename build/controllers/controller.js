"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandNode = void 0;
var validators_1 = require("./../utils/validators");
var constants_1 = require("../utils/constants");
var constants_2 = require("./../utils/constants");
function expandNode(_a, queue, map, mode) {
    var positionPlayer = _a.positionPlayer, deep = _a.deep, path = _a.path, positionBoxes = _a.positionBoxes;
    constants_2.MOVEMENTS.forEach(function (_a) {
        var direction = _a.direction, addValue = _a.addValue, isRow = _a.isRow;
        if (validators_1.isNotEdge(positionPlayer, direction, map) && validators_1.isNotWall(positionPlayer, direction, map)) {
            var newPositionBoxes = positionBoxes.slice();
            var indexBox = void 0;
            if (isRow)
                indexBox = validators_1.isThereBox(positionBoxes, [positionPlayer[0] + addValue, positionPlayer[1]]);
            else
                indexBox = validators_1.isThereBox(positionBoxes, [positionPlayer[0], positionPlayer[1] + addValue]);
            if (indexBox >= 0 && validators_1.isNotEdge(positionBoxes[indexBox], direction, map) && validators_1.isNotWall(positionBoxes[indexBox], direction, map)) {
                if (isRow)
                    newPositionBoxes[indexBox] = [positionPlayer[0] + addValue * 2, positionPlayer[1]];
                else
                    newPositionBoxes[indexBox] = [positionPlayer[0], positionPlayer[1] + addValue * 2];
            }
            var newNode = {
                positionPlayer: [positionPlayer[0] - 1, positionPlayer[1]],
                deep: deep + 1,
                path: path.concat(" " + direction),
                positionBoxes: newPositionBoxes
            };
            insertNodeToQueue(queue, newNode, mode);
        }
    });
}
exports.expandNode = expandNode;
function insertNodeToQueue(queue, node, mode) {
    switch (mode) {
        case constants_1.Algorithm.BFS:
            queue.enqueueFront(node);
            break;
        case constants_1.Algorithm.DFS:
            queue.enqueueBack(node);
            break;
        default:
            queue.enqueueFront(node);
            break;
    }
}
function isSolved(node, finalPositionBoxes) {
    var countCorrectPosition = 0;
    for (var _i = 0, _a = node.positionBoxes; _i < _a.length; _i++) {
        var boxPosition = _a[_i];
        for (var _b = 0, finalPositionBoxes_1 = finalPositionBoxes; _b < finalPositionBoxes_1.length; _b++) {
            var finalPosition = finalPositionBoxes_1[_b];
            if (boxPosition === finalPosition) {
                countCorrectPosition++;
            }
        }
    }
    if (countCorrectPosition === finalPositionBoxes.length)
        return true;
    else
        return false;
}
