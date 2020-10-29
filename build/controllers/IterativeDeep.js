"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadFile_1 = require("./../utils/ReadFile");
var controller_1 = require("./../controllers/controller");
var GenericQueue_1 = require("../models/GenericQueue");
var constants_1 = require("../utils/constants");
var world = ReadFile_1.default(process.argv[2]);
var initialNode = {
    deep: 0,
    path: '',
    positionBoxes: world.initialPositionBoxes,
    positionPlayer: world.initialPositionPlayer
};
runDeepIteration();
function runDeepIteration() {
    var queue = new GenericQueue_1.default();
    var mode = constants_1.Algorithm.DFS;
    var level = 0;
    var levelCount = 0;
    queue.enqueueBack([initialNode]);
    var currentNode = queue.dequeue();
    while (!controller_1.isSolved(currentNode, world.endPositionBoxes)) {
        if (currentNode.deep <= level) {
            controller_1.expandNode(currentNode, queue, world.map, mode);
        }
        if (!queue.isEmpty()) {
            currentNode = queue.dequeue();
            /*
            if(currentNode.deep > level){
              levelCount = currentNode.deep;
              console.log(levelCount);
            }
            */
            //GenericQueue.printNode(currentNode);
        }
        else if (queue.isEmpty() && level < 64) {
            queue.enqueueBack([initialNode]);
            level++;
        }
        else {
            console.log("No se encontró solución");
            console.log("Último nodo");
            console.log(currentNode);
            currentNode = null;
            break;
        }
    }
    if (currentNode !== null) {
        console.log("La solución es: ");
        console.log(currentNode);
    }
}
